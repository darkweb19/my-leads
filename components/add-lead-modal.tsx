"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronDown } from "lucide-react";
import { nunitoFont, playFairFont } from "./my-leads";

export default function AddLeadModal() {
	const [open, setOpen] = React.useState(false);

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button
					className={`${playFairFont.className} bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors`}
				>
					Add New Lead
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
				<Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-white p-6 shadow-lg focus:outline-none">
					<Dialog.Title
						className={`${playFairFont.className} text-xl font-bold mb-6`}
					>
						Add a New Lead
					</Dialog.Title>

					<Dialog.Close className="absolute right-6 top-6 rounded-full hover:bg-gray-100 p-1">
						<X className="h-5 w-5" />
					</Dialog.Close>

					<div className={`space-y-6`}>
						<div>
							<h3
								className={`${playFairFont.className} font-medium mb-4`}
							>
								Lead Details
							</h3>
							<div className="space-y-4">
								<input
									type="text"
									placeholder="Lead Name"
									className="w-full border-b border-gray-300 py-2 focus:border-amber-500 focus:outline-none"
								/>
								<input
									type="text"
									placeholder="Lead contact"
									className="w-full border-b border-gray-300 py-2 focus:border-amber-500 focus:outline-none"
								/>
								<SelectInput placeholder="Lead Source" />
								<SelectInput placeholder="Lead Status" />
							</div>
						</div>

						<div>
							<h3 className="font-medium mb-4">
								Interested Service
							</h3>
							<div className="space-y-4">
								<SelectInput placeholder="Inquired Service" />
								<textarea
									placeholder="Note"
									className="w-full border-b border-gray-300 py-2 focus:border-amber-500 focus:outline-none resize-none"
									rows={3}
								/>
							</div>
						</div>

						<div className="flex justify-between pt-4">
							<Dialog.Close asChild>
								<button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full transition-colors">
									Cancel
								</button>
							</Dialog.Close>
							<button
								className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition-colors"
								onClick={() => setOpen(false)}
							>
								Add Lead
							</button>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

function SelectInput({ placeholder }: { placeholder: string }) {
	return (
		<div className="relative w-full border-b border-gray-300 py-2 focus-within:border-amber-500">
			<div className="flex items-center justify-between">
				<span className="text-gray-500">{placeholder}</span>
				<ChevronDown className="h-4 w-4 text-gray-400" />
			</div>
		</div>
	);
}
