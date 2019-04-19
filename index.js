const terminalCommands = require("./terminal-commands");

// Pass name of directory to create directory.
terminalCommands.mkdir("new-directory");

// Pass name and type of file to create file.
terminalCommands.touch("new-file.txt");

// Run to list all active files within root directory.
terminalCommands.ls();
