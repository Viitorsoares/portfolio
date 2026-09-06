import CategoryProps from "./category_props";

export default function Technologies() {
    return (
        <div className="flex flex-col">
            <h2 className="text-[22px] text-white">Tecnologias que utilizo</h2>

            <div className="flex flex-row gap-2">
                <CategoryProps category={"Todos"} />
                <CategoryProps category={"Frontend"} />
                <CategoryProps category={"Backend"} />
                <CategoryProps category={"DevOps"} />
                <CategoryProps category={"Ferramentas"} />
            </div>

            <div>

            </div>
        </div>
    )
}