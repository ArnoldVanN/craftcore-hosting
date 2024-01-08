"use client"
import { Button } from "@nextui-org/react"

const error = ({ error, reset }) => {
	return (
		<div className=" h-full w-full bg-[#061124]">
			<div className="relative mx-auto flex h-1/2 justify-center pt-6 text-center sm:container">
				<div className="absolute bottom-16">
					<h2 className=" text-large">Something has gone wrong!</h2>
					<p className="p-8 text-3xl">{error.message}</p>
					<Button onClick={reset}>Try again</Button>
				</div>
			</div>
		</div>
	)
}

export default error
