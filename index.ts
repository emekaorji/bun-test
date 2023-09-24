import figlet from 'figlet';

console.log('Hello via Bun!');

console.log(Bun.version);

const server = Bun.serve({
	fetch() {
		const body = figlet.textSync('Bun!');
		return new Response(body);
		return new Response('Bun!');
	},
	port: 3000,
});

console.log(process.env.Special_secret);

console.log(`Listening on http://localhost:${server.port} ...`);
