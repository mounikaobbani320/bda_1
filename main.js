
const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

async function main() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    try {
        const name = await rl.question("Enter student name: ");
        const mark1 = 
        Number(await rl.question("Enter marks in Subject 1: "));
        const mark2 = Number(await rl.question("Enter marks in Subject 2: "));
        const mark3 = Number(await rl.question("Enter marks in Subject 3: "));

        if ([mark1, mark2, mark3].some(mark => !Number.isInteger(mark) || mark < 0 || mark > 100)) {
            console.log("Invalid marks!");
            console.log("Enter marks between 0 and 100.");
            return;
        }

        const total = mark1 + mark2 + mark3;
        const average = total / 3;

        console.log("\n--- Student Performance Report ---");
        console.log(`Name: ${name}`);
        console.log(`Total Marks: ${total}`);
        console.log(`Average: ${average}`);

        if (average >= 75) {
            console.log("Performance: Excellent");
        } else if (average >= 60) {
            console.log("Performance: Good");
        } else if (average >= 40) {
            console.log("Performance: Average");
        } else {
            console.log("Performance: Needs Improvement");
        }
    } finally {
        rl.close();
    }
}

main();
