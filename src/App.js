/* eslint-disable array-callback-return */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, selectshops } from './features/ShopSlice';
import ShopCard from './ShopCard';

function App() {

  const shops = useSelector(selectshops);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    area: "All",
    category: "All",
    status: "Open",
  });

  const [shop, setShop] = useState({
    name: "",
    area: "default",
    category: "default",
    start: "",
    end: "",
  });

  function checkDate(start, end) {
    console.log(start);
    if (Date.parse(start) < Date.parse(end)) {
      return true;
    } else {
      return false;
    }
  }

  function validateDate(start, end) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getUTCFullYear();

    let fullDate = `${year}-${month}-${day}`;
    // let fullDate = `${day} - ${month} - ${year}`;

    if (
      Date.parse(start) < Date.parse(fullDate) &&
      Date.parse(end) > Date.parse(fullDate)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setShop({ ...shop, [name]: value })
  }

  function handleFilterChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value })
  }

  return (
    <>
      <div className="App">

        <label
        className='shop-head'
          style={{
            fontSize: "24px",
            fontWeight: "bolder",
          }}>Shop List</label>

        <div style={{
          minHeight: "100vh",
          marginTop: "1em",
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            // marginTop: "30px",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <label style={{margin:"13px", font:"caption" , color:"coral"}}>Add Shop</label>
            <input
              type="text"
              placeholder='Shop name'
              inputProps={{ pattern: "[a-z]" }}
              name='name'
              onChange={handleChange}
              style={{ border: "2px solid black" ,margin:"13px"}} />

            <label style={{ margin: "13px", font:"caption" , color:"coral" }}>Area</label>
            <select
              id='area'
              name='area'
              onChange={handleChange}
              style={{ border: "2px solid black", margin:"13px" }}
              required>
              <option value="default">Select Area</option>
              <option value="Thane">Thane</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Solapur">Solapur</option>
            </select>

            <label style={{ margin: "13px", font:"caption" , color:"coral" }}>Category</label>
            <select
              id='category'
              name='category'
              onChange={handleChange}
              style={{ border: "2px solid black", margin:"13px" }}
              required>
              <option value="default">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="Stationery shop">Stationery shop</option>
            </select>

            <label style={{ margin: "13px", font:"caption" , color:"coral" }}>Start Date</label>
            <input type="date" name='start' style={{border: "2px solid black"}} onChange={handleChange} required />

            <label style={{ margin: "13px" ,  font:"caption" , color:"coral"}}>End Date</label>
            <input type="date" name='end' style={{border: "2px solid black"}} onChange={handleChange} required />

            <button
              onClick={() => {
                if (
                  checkDate(shop.start, shop.end) &&
                  shop.name !== "" &&
                  shop.area !== "default" &&
                  shop.category !== "default"
                ) {
                  dispatch(add(shop))
                } else {
                  alert("plase check your form")
                }
              }}
              style={{
                // backgroundColor: "#FFAB91",
                background:"#D1FFAB",
                font:"caption" ,
                color:"black",
                borderRadius: "14px",
                height:"27px",
                margin:"4px"
                // marginLeft: "6px"
              }}>Submit</button>

          </div>

          {/* main filter code section/ use validateDate & ShopCard file */}

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "30px",
            // marginLeft: "80px",
            // width: "90%",
            border: "2px solid black",
            flexWrap:"wrap",
            margin:"0 60px"
          }}>
            <label style={{ margin: "8px 15px",font:"caption" , color:"orangered"}}>Filter</label>

          <div>
          <label style={{ margin: "4px",font:"caption" , color:"orangered" }}>Area {" "}</label>
            <select
              name='area'
              onChange={handleFilterChange}
              style={{border:"2px solid black" , margin:"14px"}}
              >
              <option value="All">All</option>
              <option value="Thane">Thane</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Solapur">Solapur</option>
            </select>
          </div>

            <div>
            <label style={{ margin: "4px",font:"caption" , color:"orangered" }}>Category</label>
            <select
              name='category'
              onChange={handleFilterChange}
              style={{border:"2px solid black" , margin:"14px"}}
              >
              {" "}
              <option value="All">All</option>
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="Stationery shop">Stationery shop</option>
            </select>
            </div>

            <div>
            <label style={{ margin: "4px",font:"caption" , color:"orangered" }}>Status</label>
            <select
              name='status'
              onChange={handleFilterChange}
              style={{border:"2px solid black" , margin:"14px"}}
              >
              {" "}
              <option value="Open">Open</option>
              <option value="Close">Close</option>
            </select>
            </div>
          </div>

          {/* ShopCard */}

          <div style={{
            display: "flex",
            flexFlow:"wrap",
            justifyContent: "center",
            alignItems: "center",
            flexwrap: "wrap"
          }}>
            {console.log(shops)}
            {shops.map(((item, index) => {
              if (
                (item.area === filter.area || filter.area === "All") &&
                (item.category === filter.category || filter.category === "All") &&
                filter.status === "Open"
              ) {
                console.log("Open");
                if (validateDate(item.start, item.end)) {
                  return (
                    <ShopCard
                      id={index}
                      key={index}
                      name={item.name}
                      area={item.area}
                      category={item.category}
                      startDate={item.start}
                      endDate={item.end}></ShopCard>
                  );
                }
              } else if (
                (item.area === filter.area || filter.area === "All") &&
                (item.category === filter.category || filter.category === "All") &&
                filter.status === "Close"
              ) {
                console.log("Close");
                if (!validateDate(item.start, item.end)) {
                  return (
                    <ShopCard
                      id={index}
                      key={index}
                      name={item.name}
                      area={item.area}
                      category={item.category}
                      startDate={item.start}
                      endDate={item.end}></ShopCard>
                  )
                }
              }
            }))}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
