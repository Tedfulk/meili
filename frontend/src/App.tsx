import { useState } from "react";
import {
	InstantSearch,
	InfiniteHits,
	SearchBox,
	Stats,
	Highlight,
	Pagination,
} from "react-instantsearch";
import "./App.css";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import "tailwindcss/tailwind.css";
import { format } from "date-fns";

const VITE_MEILISEARCH_MASTER_KEY = import.meta.env.VITE_MEILISEARCH_MASTER_KEY;

const { searchClient } = instantMeiliSearch(
	"http://127.0.0.1:7700",
	VITE_MEILISEARCH_MASTER_KEY
);

const App = () => (
	<div className="ais-InstantSearch min-h-screen bg-gray-200 p-4">
		<h1 className="text-4xl font-bold text-center mb-8">
			Movies Demo with Meilisearch
		</h1>
		<InstantSearch indexName="movies" searchClient={searchClient}>
			<div className="mb-4">
				<Stats />
			</div>
			<div className="mb-6 flex justify-center">
				<SearchBox
					classNames={{
						input: "border p-4 rounded w-[400px]",
						submit: "hidden",
						reset: "hidden",
					}}
				/>
			</div>
			<InfiniteHits
				hitComponent={Hit}
				classNames={{ list: "grid grid-cols-4 gap-4 mb-8" }}
			/>
			<div className="mt-8 flex justify-center space-x-2">
				<Pagination
					classNames={{
						root: "flex list-none space-x-2",
						item: "border rounded p-2",
						link: "inline w-full h-full text-center",
						list: "grid grid-cols-6 gap-4",
						disabledItem: "opacity-50 cursor-not-allowed",
						selectedItem: "border-2 border-blue-500",
					}}
				/>
			</div>
		</InstantSearch>
	</div>
);

const Hit = ({ hit }) => {
	const [showFullOverview, setShowFullOverview] = useState(false);
	const releaseDateFormatted = format(
		new Date(hit.release_date * 1000),
		"MMMM d, yyyy"
	);

	const toggleOverview = () => {
		setShowFullOverview(!showFullOverview);
	};

	return (
		<div
			key={hit.id}
			className="border-2 bg-white p-4 rounded shadow-xl h-full cursor-pointer"
			onClick={toggleOverview}>
			<div className="hit-image mb-4">
				<img src={hit.poster} alt={hit.title} className="w-full rounded" />
			</div>
			<div className="hit-info">
				<div className="hit-title text-lg font-semibold text-pink-600 mb-2">
					<Highlight attribute="title" hit={hit} />
				</div>
				<div className="hit-release-date text-sm mb-2">
					{releaseDateFormatted}
				</div>
				<div
					className={`hit-overview text-gray-700 ${
						showFullOverview ? "line-clamp-none" : "line-clamp-3"
					}`}>
					<Highlight attribute="overview" hit={hit} />
				</div>
				<div className="hit-genres text-sm text-blue-600 font-semibold mt-4">
					{hit.genres.join(", ")}
				</div>
			</div>
		</div>
	);
};

export default App;
