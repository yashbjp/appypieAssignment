import React, { useEffect, useState } from "react";
import "./App.css";
import IMAGES from "./images/image";
import appypielogo from "./images/appypielogo.png";
import { TextField, InputAdornment, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import CollapsedBreadcrumbs from "./components/breadcrumbs";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const sortBy = [{ label: "Popular" }, { label: "Recently Added" }];

function App() {
  const[originalList,setOriginalList]=useState(IMAGES)
  const [filteredList, setFilteredList] = React.useState(IMAGES);
  const [selectedItems, setSelectedItems] = React.useState([]);

  useEffect(()=>{
    console.log(originalList)
  },[originalList])

  function clickedItems(id) {
    let newItems = [...originalList];
    let newFilteredItems=[...filteredList]
    let currentIndex = newItems.findIndex((item) => item.id === id);
    let filterIndex=newFilteredItems.findIndex((item) => item.id === id);
    newItems[currentIndex] = { ...newItems[currentIndex], checked: true };
    newFilteredItems[filterIndex] = { ...newFilteredItems[filterIndex], checked: true };
    let newSelectedItems = [...selectedItems];
    newSelectedItems.push(newItems[currentIndex]);
    setSelectedItems(newSelectedItems);
    setFilteredList(newFilteredItems);
    setOriginalList(newItems)
  }
  function deleteSelected(id) {
    let updatedList=[...originalList]
    let newItems = [...selectedItems];
    let newFilteredItems=[...filteredList]
    let currentIndex = originalList.findIndex((item) => item.id === id);
    let selectedIndex=newItems.findIndex((item) => item.id === id)
    let filterIndex=newFilteredItems.findIndex((item) => item.id === id);
    updatedList[currentIndex] = { ...updatedList[currentIndex], checked: false };
    newFilteredItems[filterIndex] = { ...newFilteredItems[filterIndex], checked: false };
    newItems.splice(selectedIndex, 1);
    setSelectedItems(newItems);
    setFilteredList(newFilteredItems)
    setOriginalList(updatedList)

  }
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...originalList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().startsWith(query);
    });
    setFilteredList(updatedList);
  };

  return (
    <div className="App">
      <div className="headerBackground">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "35%",
            width: "90%",
          }}
        >
          <div
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img src={appypielogo} alt=""></img>
          </div>
          <CollapsedBreadcrumbs />
        </div>
        <h5
          style={{
            fontSize: "20px",
            textAlign: "center",
            margin: "10px",
            color: "#fff",
          }}
        >
          Define your workflows with seamless integrations
        </h5>
        <span style={{ textAlign: "center", color: "#fff" }}>
          Integrations At Your Fingertips. Initiate your workflows with seamless
          integrations, and automate your business.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "70%",
          background: "#F7F7F7",
          paddingTop: "25px",
          alignItems: "center",
        }}
      >
        <div className="midsection">
          <div className="searchbar">
            <TextField
              size="small"
              style={{
                width: "90%",
                height: "7%",
                color: "#9D9D9D",
                border: "1px grey",
              }}
              onChange={filterBySearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Autocomplete
              disablePortal
              size="small"
              id="combo-box-demo"
              options={sortBy}
              sx={{ width: 300, background: "#F7F7F7" }}
              renderInput={(params) => <TextField {...params} label="" />}
              disableClearable
            />
          </div>
          <div className="logos">
            {filteredList.map((ele, index) => {
              const { image, id, name } = ele;
              return (
                <div style={{ textAlign: "center",
                height: "120px",position:'relative',width:"111px"
              }}>
              <CheckCircleIcon style={{position:'absolute',paddingLeft:'33px',
              color:'#007EE5', display:ele?.checked ? '':'none'}}
              />
                  <button
                    className="logo"
                    style={{
                      height: "102px",
                      width: "104px",
                      cursor: "pointer",
                    }}
                    onClick={() => clickedItems(ele.id)}
                  >
                    <img src={image} alt=""></img>
                  </button>
                  <span style={{color:"#6A6A6A",fontSize:'small'}}>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "10%",
            background: "#F7F7F7",
            width: "80%",
            paddingLeft: "30px",
            border: "1px solid #D6D6D6",
            paddingRight: "20px",
            gap: "10px",
            borderTop:0
          }}
        >
          {selectedItems.map((item) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px 5px 5px",
                background: item.color,
                fontSize: "13px",
                color: "white",
                borderRadius: "4px",
              }}
            >
              <ClearIcon
                fontSize="small"
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => deleteSelected(item.id)}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
