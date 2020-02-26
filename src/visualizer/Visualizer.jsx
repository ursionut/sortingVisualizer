import React from 'react';
import Button from '@material-ui/core/Button'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import './Visualizer.css';



  const arrayLengthMarks = [
    {
      value: 1,
      label: 1
    },
    {
      value: 25,
      label: 25
    },
    {
      value: 50,
      label: 50
    },
    {
      value: 75,
      label: 75
    },
    {
      value: 100,
      label: 100
    },
  ];

  const speedMarks = [
    {
      value: 1,
      label: 'slow'
    },
    {
      value: 50,
      label: 'normal'
    },
    {
      value: 100,
      label: 'fast'
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

export default class Visualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.mySorter = React.createRef()

        this.state = {
            numArray: [],
            arrayLength: 50,
        };
    }

    componentDidMount() {
        this.resetArray();
        setTimeout(() => {
          console.log(this.mySorter.current.offsetWidth)
        }, 0)
        
    }

    resetArray() {
        let max = 100;
        let min = 5;
        const numArray = Array.from(
            {length: this.state.arrayLength}, 
            () => Math.floor(Math.random() * (max - min + 1)) + min
        );

        this.setState({numArray})
    }


    render() {
        const { numArray, arrayLength } = this.state;

        return (
            <div className="container">
                <div className="sorter" ref={this.mySorter}>
                    {numArray.map((value, idx) => (
                        <div 
                          className="column"
                          style={{height: `${value}%` }}></div>
                    ))}
                </div>
                <div className="menu">
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => {this.resetArray()}}>
                    Generate Array
                </Button>
                <div className="length-container">
                    <Typography 
                        id="array-length-slider" 
                        gutterBottom>
                        Array length
                    </Typography>
                    <Slider  
                        onChange = {(e, value) => {this.setState({arrayLength: value})}}
                        valueLabelDisplay="auto" 
                        aria-labelledby="array-length-slider"
                        getAriaValueText={valuetext}
                        defaultValue={arrayLength} 
                        value={arrayLength}
                        step={1}
                        min={1}
                        max={100}
                        marks={arrayLengthMarks}
                    />
                </div>
                <div className="speed-container">
                <   Typography 
                        id="speed-slider" 
                        gutterBottom>
                        Speed
                    </Typography>
                    <Slider  
                        valueLabelDisplay="auto" 
                        aria-labelledby="array-length-slider"
                        getAriaValueText={valuetext}
                        defaultValue={50} 
                        step={1}
                        min={1}
                        max={100}
                        marks={speedMarks}
                    />
                </div>

                <Button variant="contained" color="primary">
                    Bubble Sort
                </Button>
                </div>
            </div>
        )
    }
}