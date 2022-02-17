const AddNewSiteButton = () => {
	return (
		<button
			className="m-2 p-20 rounded-md bg-slate-100 shadow-md"
			onClick={() => alert("Added new site")}
		>
			<p className="font-bold text-6xl text-gray-500">+</p>
		</button>
	);
};

export default AddNewSiteButton;
