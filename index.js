const net = require("net");
const PORT = 5060;
const server = net.createServer();

const maximum_users = 2;
var all_users = [];
let highestRank = 0;
server.on("connection", (socket) => {
	const user = socket.remoteAddress + ": " + socket.remotePort;
	all_users.push(socket);
	if (all_users.length > maximum_users) {
		socket.end("Server is full....please try again later");
		return;
	} else {
		const rank = highestRank++;
		all_users[rank] = socket;
		console.log(`user ${user} joined the connection`);
		socket.write("Type Your message : ");

		socket.on("data", (userData) => {
			let message = userData.toString();
			let user_message = `${user}  --> ${message}` + " ";

			let senderRank = all_users.indexOf(socket);
			all_users.forEach((user) => {
				if (senderRank > user) {
					console.log("command accepted: ", user_message);
				} else {
					console.log("Command rejected", user_message);
				}
			});
		});
		socket.on("close", () => {
			socket.on("close", () => {
				const rank = all_users.indexOf(socket);
				delete all_users[rank];
				for (let i = rank + 1; i < all_users.length; i++) {
					if (all_users[i]) {
						all_users[i - 1] = all_users[i];
					}
				}
				highestRank--;
				console.log(`${user} left the connection`);
			});

			console.log(`${user} left the connection`);
		});
		socket.on("error", (error) => {
			console.log(error);
		});
	}
});
server.listen(PORT, () =>
	console.log(`server connection established on ${PORT}`)
);
