import { useDispatch } from "react-redux";
import { del } from "./features/ShopSlice";

export default function ShopCard({
    id,
    name,
    area,
    category,
    startDate,
    endDate,
}) {

    const dispatch = useDispatch();

    return (
        <div style={{
            border: "2px solid black",
            borderRadius: "8px",
            height:"220px",
            margin: "4px",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"13px",
        }}>
            <div style={{ margin: "5px" }}>
                <div style={{ margin: "4px", marginLeft: "13px", marginTop: "13px", fontSize: "23px", fontWeight: "bolder", }}>
                    {name}
                </div>

                <div style={{ marginLeft: "10px", marginTop: "12px" }}>
                    Area:-  {area}
                </div>

                <div style={{ marginLeft: "10px", marginTop: "4px" }}>
                    Category:- {category}
                </div>

                <div style={{ marginLeft: "6px", marginTop: "16px" }}>
                    Start Date - End Date
                    <br />
                    {`${startDate} - ${endDate}`}
                </div>

                <button
                    onClick={() => dispatch(del(id))}
                    style={{
                        background: "#81F441",
                        color:"#111111",
                        border: "1px solid black",
                        borderRadius: "12px",
                        marginLeft: "10px",
                        height: "2em",
                        padding: "0 1em",
                        marginTop: "18px"
                    }}
                >
                    Delete
                </button>
            </div>

        </div>
    )
}