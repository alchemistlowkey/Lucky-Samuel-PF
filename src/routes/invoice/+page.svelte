<script>
	import '$lib/input.css';
	import jsPDF from 'jspdf';
	import 'jspdf-autotable'; // Add autotable for table support
	import { success, warning, failure } from '$lib/toast-theme.js'

	function getDate() {
		const date = new Date();
		const [month, day, year] = date
			.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
			.split('/');
		return `${year}-${month}-${day}`;
	}

	// Format numbers with commas
	function formatCurrency(amount) {
		return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	// Invoice data
	let name = $state('');
	let date = $state(getDate());
	let newItem = $state({ description: '', personnel: 1, amount: 0 });
	let items = $state([]); // Array to store all invoice items
	let total = $state(0);

	// Add item to the invoice
	function addItem(event) {
		event.preventDefault();
		if (newItem.description && newItem.personnel > 0 && newItem.amount >= 0) {
			items = [...items, { ...newItem }]; // Add item to the list
			calculateTotal(); // Recalculate total
			success(`Added ${newItem.description} with ${newItem.personnel} personnel for ₦${formatCurrency(newItem.amount)} each!`)
			newItem = { description: '', personnel: 1, amount: 0 }; // Reset input fields
		}
		else {
			warning(`Please fill in all fields correctly!`)
		}
	}

	// Remove item from the invoice
	function removeItem(index) {
		items.splice(index, 1);
		items = [...items]; // Update the array
		calculateTotal();
		warning(`Removed ${index + 1} item from the invoice!`)
	}

	// Calculate total
	function calculateTotal() {
		total = items.reduce((sum, item) => {
			return sum + item.personnel * item.amount;
		}, 0);
	}

	// Export invoice as PDF
	// Export invoice as PDF
	function exportPDF() {
		const doc = new jsPDF();
		const pageWidth = doc.internal.pageSize.width; // Get page width

		// Add centered Invoice text
		doc.setFontSize(30);
		const invoiceText = 'Invoice';
		const invoiceTextWidth =
			(doc.getStringUnitWidth(invoiceText) * doc.internal.getFontSize()) / doc.internal.scaleFactor;
		const invoiceXOffset = (pageWidth - invoiceTextWidth) / 2;
		doc.text(invoiceText, invoiceXOffset, 20);

		// Add logo image
		const img = new Image();
		img.src = 'LS_dc.png'; // Make sure this path is correct
		img.onload = () => {
			const logoWidth = 30; // Adjust logo width
			const logoHeight = 30; // Adjust logo height
			const logoX = pageWidth - logoWidth - 10; // Position near the top-right corner
			const logoY = 10; // Position from the top
			doc.addImage(img, 'PNG', logoX, logoY, logoWidth, logoHeight);

			// Add name and date
			doc.setFontSize(16);
			doc.text(`Name: ${name}`, 10, 40);

			// Add table
			const tableData = items.map((item) => [
				item.description,
				item.personnel,
				`NGN${formatCurrency(item.amount.toFixed(2))}`,
				`NGN${formatCurrency((item.personnel * item.amount).toFixed(2))}`
			]);
			doc.autoTable({
				head: [['Description', 'Personnel', 'Amount', 'Total']],
				body: tableData,
				startY: 50 // Adjust start position to account for logo
			});

			// Add total and align it to the right
			doc.setFontSize(12);
			const totalText = `Total: NGN${formatCurrency(total.toFixed(2))}`;
			const totalTextWidth =
				(doc.getStringUnitWidth(totalText) * doc.internal.getFontSize()) / doc.internal.scaleFactor;
			const totalXOffset = pageWidth - totalTextWidth - 15; // Subtract 10 for padding
			doc.text(totalText, totalXOffset, doc.previousAutoTable.finalY + 10);

			// Add extended thank you message
			doc.setFontSize(20);
			const thankYouText = 'Thank you!';
			const thankYouTextWidth =
				(doc.getStringUnitWidth(thankYouText) * doc.internal.getFontSize()) /
				doc.internal.scaleFactor;
			const thankYouXOffset = (pageWidth - thankYouTextWidth) / 2;
			doc.text(thankYouText, thankYouXOffset, doc.previousAutoTable.finalY + 30);

			doc.setFontSize(12);
			const additionalMessage =
				'Created at www.luckysamuel.me.';
			const additionalMessageTextWidth =
				(doc.getStringUnitWidth(additionalMessage) * doc.internal.getFontSize()) /
				doc.internal.scaleFactor;
			const additionalMessageXOffset = (pageWidth - additionalMessageTextWidth) / 2;
			doc.text(additionalMessage, additionalMessageXOffset, doc.previousAutoTable.finalY + 40);

			// Save the PDF
			doc.save(`${name}.pdf`);
		};
	}
</script>

<section class="max-w-lg mx-auto justify-between m-5">
	<div>
		<form onsubmit={addItem} class="grid grid-cols-1 mx-auto">
			<input
				class="bg-slate-300 md:p-2 p-1 m-2 rounded-lg capitalize"
				type="text"
				placeholder="Customer's name"
				bind:value={name}
			/>
			<input
				class="bg-slate-300 md:p-2 p-1 m-2 rounded-lg"
				type="date"
				bind:value={date}
				min={getDate()}
			/>
			<input
				class="bg-slate-300 md:p-2 p-1 m-2 rounded-lg capitalize"
				type="text"
				placeholder="Description"
				bind:value={newItem.description}
			/>
			<input
				class="bg-slate-300 md:p-2 p-1 m-2 rounded-lg"
				type="number"
				placeholder="Personnel"
				bind:value={newItem.personnel}
				min="1"
			/>
			<input
				class="bg-slate-300 md:p-2 p-1 m-2 rounded-lg"
				type="number"
				placeholder="Amount"
				bind:value={newItem.amount}
				min="0"
				step="0.01"
			/>
			<button
				type="submit"
				class="bg-blue-500 hover:bg-sky-800 btn text-white px-4 py-2 rounded-lg mt-3"
			>
				Add Item
			</button>
		</form>
	</div>
</section>

<section class="max-w-5xl mx-auto glass bg-[#f6fffd] mb-5 p-5 rounded-lg">
	<div class="grid grid-cols-2 mx-auto p-5">
		<div>
			<h1 class="font-semibold uppercase float-start md:text-6xl text-2xl">Invoice</h1>
		</div>
		<div>
			<img src="LS_dc.png" class="md:w-20 md:h-20 w-12 h-12 float-end" alt="logo" />
		</div>
	</div>

	<div class="grid grid-cols-2 mx-auto py-5">
		<div>
			<h2 class="md:text-2xl text-base float-start capitalize">Name: {name}</h2>
		</div>
		<div>
			<h2 class="md:text-2xl text-base float-end">Date: {date}</h2>
		</div>
	</div>

	<table class="table mx-0 border-collapse border border-gray-300">
		<thead class="bg-gray-200">
			<tr>
				<th class="border border-gray-300 md:p-2 p-1">Description</th>
				<th class="border border-gray-300 md:p-2 p-1">Personnel</th>
				<th class="border border-gray-300 md:p-2 p-1">Amount</th>
				<th class="border border-gray-300 md:p-2 p-1">Total</th>
				<th class="border border-gray-300 md:p-2 p-1">Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each items as item, index}
				<tr>
					<td class="border border-gray-300 md:p-2 p-1 capitalize">{item.description}</td>
					<td class="border border-gray-300 md:p-2 p-1">{item.personnel}</td>
					<td class="border border-gray-300 md:p-2 p-1">₦{formatCurrency(item.amount.toFixed(2))}</td>
					<td class="border border-gray-300 md:p-2 p-1"
						>₦{formatCurrency((item.personnel * item.amount).toFixed(2))}</td
					>
					<td class="border border-gray-300 md:p-2 p-1">
						<button
							onclick={() => removeItem(index)}
							class="bg-red-500 hover:bg-rose-800 text-white rounded-lg"
						>
							Remove
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="mt-5 text-right">
		<h2 class="text-2xl font-bold">Total: ₦{formatCurrency(total.toFixed(2))}</h2>
	</div>

	<div class="text-right mt-5">
		<button
			onclick={exportPDF}
			class="bg-green-500 btn hover:bg-emerald-800 text-white px-4 py-2 rounded-lg"
		>
			Download PDF
		</button>
	</div>

	<div class="text-center mt-10">
		<h2 class="text-2xl italic">Thank you!</h2>
	</div>
</section>

<style>
	
</style>
