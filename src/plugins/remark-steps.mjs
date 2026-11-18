// Turns a :::steps ... ::: block into Starlight's "Steps" layout.
// Works in plain .md pages (and so from Pages CMS).
// Every list item inside the block becomes a numbered step. Anything between
// list items (images, notes, paragraphs) is kept inside the step above it, so
// editors don't have to worry about indenting.
export default function remarkSteps() {
	return (tree) => walk(tree);
}

function walk(node) {
	if (!node.children) return;
	for (let i = 0; i < node.children.length; i++) {
		const child = node.children[i];
		if (child.type === 'containerDirective' && child.name === 'steps') {
			const replacement = buildSteps(child);
			node.children.splice(i, 1, ...replacement);
			i += replacement.length - 1;
		} else {
			walk(child);
		}
	}
}

function buildSteps(directive) {
	const before = [];
	const steps = [];
	for (const child of directive.children) {
		if (child.data?.directiveLabel) continue;
		if (child.type === 'list') {
			for (const item of child.children) {
				steps.push({ type: 'listItem', spread: true, children: [...item.children] });
			}
		} else if (steps.length) {
			steps[steps.length - 1].children.push(child);
		} else {
			before.push(child);
		}
	}
	if (!steps.length) return before;
	steps.forEach(walk);
	return [
		...before,
		{
			type: 'list',
			ordered: true,
			spread: true,
			children: steps,
			data: { hProperties: { role: 'list', className: ['sl-steps'] } },
		},
	];
}
