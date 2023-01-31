# tcp-server

# TABLE OF CONTENTS
- [How To work with the server](#accesing-the-server)
- [Technologies used](#technologies)
- [Attributions](#attributions)

## accesing the server
On Your Local Machine, Go to your Command Line Interface(CLI) and access telnet by typing "telnet 127.0.0.1 < server-Port >" And Press Enter.
The server Port in this case is 5060.
- NB:The Server is Limited to accept only a maximum of 2 users(clients) at a time.

## technologies
The following technologies were used in the development of the server
- Nodejs
- Express framework
- VsCode code editor

## attributions
I first created a basic TCP server that "console.logged" the user's message on the terminal when the user keyied-in the data. I then used OpenAI's chatGPT tool to generate a code
that ensured that users(clients) are assigned ranks on first-come-first-serve basis from the code I had written
