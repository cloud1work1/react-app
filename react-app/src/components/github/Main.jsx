import React, {useState} from 'react';

function Main(props) {
    const [data, setData]= useState([]);
    const [checked, setChecked]=useState(false);
    const handleTxtBoxChange = (e) => {
        setData(e.target.value);
        //console.log('data', data);
    }
    const handleChkBoxChange =() => {
        setChecked(!checked);
        //console.log('checked', checked);
    }
    const search =(e) => {
        console.log('checked', checked);
        /*if(checked){
            props.history.push({
                Pathname: `/specific/${data}`
            })
        } else {
            props.history.push({
                Pathname: `/data/${data}`
            })
        }*/
        
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    Github Finder
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input type="checkbox" name="chkbox" value={checked} onChange={handleChkBoxChange}></input>
                    <label htmlFor="chkbox">Specific User Search</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <input type="text" name="searchbox" onChange={handleTxtBoxChange}/>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary" onClick={search}>Search</button>
                </div>
            </div>
        </div>
    ) 
}

export default Main;