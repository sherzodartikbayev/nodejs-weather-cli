import getArgs from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.services.js'

const startCLI = () => {
	const args = getArgs(process.argv)

	if (args.h) {
		printHelp()
	}

	if (args.s) {
		// save city
	}

	if (args.t) {
		// save token
	}

	// result
}

startCLI()
