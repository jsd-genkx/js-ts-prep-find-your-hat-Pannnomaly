"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;
// let letterStatus = false;
let allowedStatus = true;
// console.log(board.length);
// console.log(board[0].length);

// Game play loop

while(playing)
{
	printBoard(board);
	const input = prompt("Which way? (w/a/s/d): ").toLowerCase().trim();
	console.log(input);
	isAllowedInput(input);
	updateBoard(input, allowedStatus);
}

	// printBoard(board);
	// const input = prompt("Which way? (w/a/s/d): ").toLowerCase().trim();
	// console.log(input);
	// isAllowedInput(input);
	// updateBoard(input, allowedStatus);

// isRegex(input);

// Print board
function printBoard(board) {
	console.clear();
	// const boardGame = board.map((path) => path.join("")).join("\n");
	// console.log(boardGame);
	
	for (let i = 0; i < board[0].length; i++)
	{
		console.log(board[i].join(""));
	}

	// board.forEach(run => {
	// 	console.log(run);
	// 	console.log(run.join(""));
	// });
}

// function isRegex (input)
// {
// 	const alphabeticRegex = /^[A-Za-z]+$/;
// 	if (alphabeticRegex.test(input))
// 	{
// 		letterStatus = false
// 		console.log(`contain only letters (nogex) + ${letterStatus}`);
// 		return letterStatus;
// 	} else
// 	{
// 		letterStatus = true;
// 		console.log(`contain regex letters + ${letterStatus}`);
// 		return letterStatus;
// 	}
// }

function isAllowedInput (input)
{
	const allowed = ["w", "a", "s", "d"];
	if (!allowed.includes(input))
	{
		allowedStatus = false;
		console.log(`no allowed + ${allowedStatus}`);
		return allowedStatus;
	} else
	{
		allowedStatus = true;
		console.log(`allowed + ${allowedStatus}`);
		return allowedStatus;
	}
}

function updateBoard (input, allowedStatus)
{
	// if (letterStatus)
	// {
	// 	console.log(`${input} and ${letterStatus}`);
	// 	console.log("can not run1");
	// 	return;
	// }

	if (!allowedStatus)
	{
		console.log(`${input} and ${allowedStatus}`);
		console.log("can not run");
		return;
	}

	console.log("can run eieie");

	if (input === "w")
	{
		moveUp();
	} else if (input === "a")
	{
		moveLeft();
	} else if (input === "s")
	{
		moveDown();
	} else if (input === "d")
	{
		moveRight();
	}
}

function isHat (board)
{
	if (board[playerRow][playerCol] === "^")
	{
		console.log("HAT!!!");
		playing = false;
		return playing;
	}
}

function isHole (board)
{
	if (board[playerRow][playerCol] === "O")
	{
		console.log("HOLY SHEETT!!!");
		playing = false;
		return playing;
	}
}

function moveUp ()
{
	if (playerRow > 0)
	{
		playerRow--;
		isHole (board);
		isHat (board);
		board[playerRow][playerCol] = "*";
		console.log(`move UP row: ${playerRow} col: ${playerCol}`);
	} else
	{
		console.log("outUP");
		playing = false;
		return playing;
	}
}

function moveDown()
{
	if (playerRow < board[0].length - 1)
	{
		playerRow++;
		isHole (board);
		isHat (board);
		board[playerRow][playerCol] = "*";
		console.log(`move DOWN row: ${playerRow} col: ${playerCol}`);
	} else
	{
		console.log("outDOWN");
		playing = false;
		return playing;
	}
}

function moveLeft()
{
	if (playerCol > 0)
	{
		playerCol--;
		isHole (board);
		isHat (board);
		board[playerRow][playerCol] = "*";
		console.log(`move LEFT row: ${playerRow} col: ${playerCol}`);
	} else
	{
		console.log("outLEFT");
		playing = false;
		return playing;
	}
}

function moveRight()
{
	if (playerCol < board[0].length - 1)
	{
		playerCol++;
		isHole (board);
		isHat (board);
		board[playerRow][playerCol] = "*";
		console.log(`move RIGHT row: ${playerRow} col: ${playerCol}`);
	} else
	{
		console.log("outRIGHT");
		playing = false;
		return playing;
	}
}