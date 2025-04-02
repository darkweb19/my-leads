"use client";
import { useState } from "react";
import { Eye, ChevronDown, ChevronRight, Search, Pencil } from "lucide-react";
import AddLeadModal from "./add-lead-modal";
import LeadDetailsModal from "./lead-details-modal";
import { leadsData } from "@/data/leads";
import { Nunito, Playfair } from "next/font/google";

export const nunitoFont = Nunito({ subsets: ["latin"] });
export const playFairFont = Playfair({ subsets: ["latin"] });

export default function MyLeads() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedLead, setSelectedLead] = useState<any>(null);
	const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

	const openLeadDetails = (lead: any) => {
		setSelectedLead(lead);
		setIsDetailsModalOpen(true);
	};

	return (
		<div className="max-w-7xl mx-auto bg-gray-100 p-6 shadow-sm">
			<div className={`mb-5 ${playFairFont.className}`}>
				<h1 className={`${playFairFont.className} text-3xl font-bold`}>
					My Leads
				</h1>
				<div className="text-sm text-gray-500 mt-1">
					Venues / My Leads
				</div>
			</div>

			{/* Stats Cards */}
			<div className="grid grid-cols-7 mb-6 p-3 bg-white rounded-md">
				<StatCard
					number="125"
					label="All Time Leads"
					textColor="text-gray-800"
				/>
				<StatCard
					number="06"
					label="New Leads (This week)"
					textColor="text-gray-800"
				/>
				<StatCard
					number="89"
					label="Converted Leads"
					textColor="text-green-600"
				/>
				<StatCard
					number="28"
					label="Pending Followups"
					textColor="text-orange-500"
				/>
				<StatCard
					number="19"
					label="Warm Leads"
					textColor="text-blue-500"
				/>
				<StatCard
					number="09"
					label="Cold Leads"
					textColor="text-gray-800"
				/>
				<StatCard
					number="05"
					label="Lost Leads"
					textColor="text-gray-800"
				/>
			</div>

			{/* Filters and Search */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex gap-4">
					<SelectFilter label="Date" />
					<SelectFilter label="Warm" />
				</div>
				<div className="flex gap-4">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
						<input
							type="text"
							placeholder="Search your Leads..."
							className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
					<AddLeadModal />
				</div>
			</div>

			{/* Leads Table */}
			<div className={`${nunitoFont.className} overflow-x-auto`}>
				<table className="min-w-full bg-white">
					<thead>
						<tr className="bg-gray-100 text-left text-sm">
							<th className="py-3 px-4 font-medium">Lead Name</th>
							<th className="py-3 px-4 font-medium">
								Phone Number
							</th>
							<th className="py-3 px-4 font-medium">
								Inquiry Date
							</th>
							<th className="py-3 px-4 font-medium">
								Last Activity
							</th>
							<th className="py-3 px-4 font-medium">
								Service Type
							</th>
							<th className="py-3 px-4 font-medium">
								Lead Source{" "}
								<ChevronDown className="inline h-4 w-4" />
							</th>
							<th className="py-3 px-4 font-medium">
								Lead Status{" "}
								<ChevronDown className="inline h-4 w-4" />
							</th>
							<th className="py-3 px-4 font-medium">Actions</th>
						</tr>
					</thead>
					<tbody>
						{leadsData.map((lead) => (
							<tr
								key={lead.id}
								className="border-b text-sm border-gray-200 hover:bg-gray-50"
							>
								<td className="py-3 px-4">{lead.name}</td>
								<td className="py-3 px-4">{lead.phone}</td>
								<td className="py-3 px-4">
									{lead.inquiryDate}
								</td>
								<td className="py-3 px-4">
									{lead.lastActivity}
								</td>
								<td className="py-3 px-4">
									{lead.serviceType}
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs border ${
											lead.sourceText === "Online"
												? "bg-green-100 text-green-800 border-green-300"
												: "bg-yellow-100 text-yellow-800 border-yellow-300"
										}`}
									>
										{lead.sourceText}
									</span>
								</td>
								<td className="py-3 px-4">
									<span
										className={`px-2 py-1 rounded-full text-xs ${lead.statusColor}`}
									>
										{lead.leadStatus}
									</span>
								</td>
								<td className="py-3 px-4">
									<div className="flex gap-2">
										<button
											className="text-gray-500 hover:text-gray-700"
											onClick={() =>
												openLeadDetails({
													id: lead.id,
													name: lead.name,
													phone: lead.phone,
													status: lead.leadStatus,
													statusColor:
														lead.statusColor,
													sourceText: lead.sourceText,
													sourceColor:
														lead.sourceColor,
												})
											}
										>
											<Eye className="h-5 w-5" />
										</button>
										<button className="text-gray-500 hover:text-gray-700">
											<Pencil className="h-5 w-5" />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Pagination */}
			<div className="flex items-center justify-between mt-4 text-sm">
				<div>
					<span>View</span>
					<select className="mx-2 border rounded px-2 py-1">
						<option>10</option>
						<option>25</option>
						<option>50</option>
					</select>
				</div>
				<div className="flex items-center gap-2">
					<span>1-10 / 50</span>
					<button className="p-1 rounded hover:bg-gray-100">
						<ChevronRight className="h-5 w-5" />
					</button>
				</div>
			</div>

			{/* Lead Details Modal */}
			{selectedLead && (
				<LeadDetailsModal
					isOpen={isDetailsModalOpen}
					onClose={() => setIsDetailsModalOpen(false)}
					lead={selectedLead}
				/>
			)}
		</div>
	);
}

// Stat Card Component
function StatCard({
	number,
	label,
	textColor,
}: {
	number: string;
	label: string;
	textColor: string;
}) {
	return (
		<div className="text-center">
			<div className={`text-2xl font-bold ${textColor}`}>{number}</div>
			<div className={`${textColor} text-xs text-gray-500 mt-1`}>
				{label}
			</div>
		</div>
	);
}

// Select Filter Component
function SelectFilter({ label }: { label: string }) {
	return (
		<div className="inline-flex items-center justify-between rounded-md border border-gray-300 px-4 py-2 text-sm">
			<span>{label}</span>
			<ChevronDown className="ml-2 h-4 w-4 opacity-50" />
		</div>
	);
}
