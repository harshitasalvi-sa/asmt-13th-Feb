import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpells } from "../features/spells/spellsSlice";

const Spells = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.spells);

  const [page, setPage] = useState(1);
  const spellsPerPage = 10;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSpells());
    }
  }, [dispatch, status]);

  const startingIndex = (page - 1) * spellsPerPage;
  const currentSpells = data.slice(
    startingIndex,
    startingIndex + spellsPerPage
  );

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="p-10 flex flex-col">
      <h1 className="text-4xl font-bold text-yellow-600 text-center mb-10">Spells</h1>

      <div className=" grid grid-cols-2 md:grid-cols-2 gap-4 px-10">
        {currentSpells.map((spell, index) => (
          <div key={index} className="spells p-6 rounded shadow bg-indigo-950 text-gray-300">
            <h2 className="font-semibold">{spell.spell}</h2>
            <p>Purpose : {spell.use}</p>
          </div>
        ))}
      </div>

      <div className="m-auto mt-6 flex gap-4">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded-xl"
        >
          Prev
        </button>

        <span className="text-gray-200">Page {page}</span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={startingIndex + spellsPerPage >= data.length}
          className="px-4 py-2 bg-gray-200 rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Spells;
