"use client";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { X, Pencil, ChevronDown } from "lucide-react";
import { playFairFont } from "./my-leads";

interface LeadDetailsModalProps {
	isOpen: boolean;
	onClose: () => void;
	lead: {
		id: number;
		name: string;
		phone: string;
		status: string;
		statusColor: string;
		sourceText: string;
		sourceColor: string;
	};
}

export default function LeadDetailsModal({
	isOpen,
	onClose,
	lead,
}: LeadDetailsModalProps) {
	return (
		<Dialog.Root open={isOpen} onOpenChange={onClose}>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
				<Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-white p-6 shadow-lg focus:outline-none">
					<div className="flex items-center justify-between mb-4">
						<Dialog.Title
							className={`${playFairFont.className} text-xl font-bold`}
						>
							Lead Details
						</Dialog.Title>
						<div className="flex items-center gap-2">
							<button className="rounded-full hover:bg-gray-100 p-1">
								<Pencil className="h-5 w-5" />
							</button>
							<Dialog.Close className="rounded-full hover:bg-gray-100 p-1">
								<X className="h-5 w-5" />
							</Dialog.Close>
						</div>
					</div>

					<Tabs.Root
						defaultValue="details"
						className="w-full flex flex-col"
						style={{ minHeight: "450px" }}
					>
						<Tabs.List className="flex mb-6">
							<Tabs.Trigger
								value="details"
								className={`${playFairFont.className} px-4 py-2 text-sm font-medium rounded-full data-[state=active]:border`}
							>
								Lead Details
							</Tabs.Trigger>
							<Tabs.Trigger
								value="activity"
								className={`${playFairFont.className} px-4 py-2 text-sm font-medium rounded-full data-[state=active]:border`}
							>
								Activity
							</Tabs.Trigger>
						</Tabs.List>

						<div className="flex-1 flex flex-col">
							<Tabs.Content
								value="details"
								className="outline-none flex-1 flex flex-col"
							>
								<div className="flex-1 overflow-auto py-6">
									<div className="space-y-6">
										<div className=" ">
											<h3
												className={`${playFairFont.className} font-medium mb-4`}
											>
												Lead Details
											</h3>
											<div className="flex items-start gap-x-8">
												{/* Lead */}
												<div className=" p-2">
													<div className="text-sm text-gray-500">
														Lead
													</div>
													<div className="font-medium">
														{lead.name ||
															"Fab Senchuri"}
													</div>
												</div>

												{/* Contact */}
												<div className="p-2">
													<div className="text-sm text-gray-500">
														Contact
													</div>
													<div className="font-medium">
														{lead.phone ||
															"9804400000"}
													</div>
												</div>
												{/* Lead Status */}
												<div className="p-2">
													<div className="text-sm text-gray-500">
														Lead Status
													</div>
													<div className="flex items-center">
														<span
															className={`px-3 py-1 rounded-md text-sm inline-flex items-center gap-1 ${
																lead.status ===
																"Warm"
																	? "bg-blue-500 text-white"
																	: lead.statusColor ||
																	  "bg-blue-500 text-white"
															}`}
														>
															{lead.status ||
																"Warm"}
															<ChevronDown className="h-4 w-4" />
														</span>
													</div>
												</div>

												{/* Source */}
												<div className="p-2">
													<div className="text-sm text-gray-500">
														Source
													</div>
													<div className="flex items-center">
														<span
															className={`px-3 py-1 rounded-md text-sm inline-flex items-center gap-1 ${
																lead.sourceText ===
																"Online"
																	? "bg-green-100 text-green-800 border border-green-300"
																	: "bg-yellow-100 text-yellow-800 border border-yellow-300"
															}`}
														>
															{lead.sourceText ||
																"Online"}
															<ChevronDown className="h-4 w-4" />
														</span>
													</div>
												</div>
											</div>
										</div>

										<div className="border-t pt-6">
											<h3
												className={`${playFairFont.className} font-medium mb-4`}
											>
												Interested Service
											</h3>
											<div className="space-y-4">
												<div>
													<div className="text-sm text-gray-500">
														Service
													</div>
													<div className="font-medium">
														Wedding Venue
													</div>
												</div>
												<div>
													<div className="text-sm text-gray-500">
														Note
													</div>
													<div className="text-sm">
														Client is thinking of
														organizing a wedding
														program in our venue in
														falgun. it They are
														pretty interested with
														our services and they
														are warm.
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="border-t pt-4 mt-auto">
									<div className="flex justify-between">
										<Dialog.Close asChild>
											<button className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full transition-colors">
												Cancel
											</button>
										</Dialog.Close>
										<div className="flex gap-2">
											<button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors">
												Mark as Lost
											</button>
											<button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition-colors">
												Mark as Converted
											</button>
										</div>
									</div>
								</div>
							</Tabs.Content>

							<Tabs.Content
								value="activity"
								className="outline-none flex-1 flex flex-col"
							>
								<div className="flex-1 overflow-auto py-6">
									<div className="space-y-0">
										<div className="flex items-center justify-between py-4 border-b">
											<div className="flex items-center">
												<div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
												<span className="text-sm font-medium">
													Lead Created
												</span>
											</div>
											<div className="text-sm text-gray-500">
												23 feb, 2024
											</div>
										</div>

										<div className="flex items-center justify-between py-4 border-b">
											<div className="flex items-center">
												<div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
												<span className="text-sm font-medium">
													Lead status changed to{" "}
												</span>
												<span className="ml-1 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-md">
													Warm
												</span>
											</div>
											<div className="text-sm text-gray-500">
												25 feb, 2024
											</div>
										</div>

										<div className="flex items-center justify-between py-4 border-b">
											<div className="flex items-center">
												<div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
												<span className="text-sm font-medium">
													Lead Status changed to{" "}
												</span>
												<span className="ml-1 px-2 py-0.5 bg-green-600 text-white text-xs rounded-md">
													Require Followup
												</span>
											</div>
											<div className="text-sm text-gray-500">
												27 feb, 2024
											</div>
										</div>

										<div className="flex items-center justify-between py-4 border-b">
											<div className="flex items-center">
												<div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
												<span className="text-sm font-medium">
													Lead status changed to{" "}
												</span>
												<span className="ml-1 px-2 py-0.5 bg-green-600 text-white text-xs rounded-md">
													Converted
												</span>
											</div>
											<div className="text-sm text-gray-500">
												28 feb, 2024
											</div>
										</div>
									</div>
								</div>
							</Tabs.Content>
						</div>
					</Tabs.Root>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
