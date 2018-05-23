import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 'none',
            count: 'none'
        }
      }
      

  
      render(){
          let string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
          let arr = string.split(' ').sort((a,b) => {return a-b}).map((value) => value);
          const newThis = this;
          function linearSearch(string, value){
            for(let i=0; i<string.length; i++){
                if(arr[i] === value){
                    newThis.setState({
                        input: value,
                        count: i
                    })
                }
            }
            console.log(value);
        }
        function binarySearch(arr, value, start=0, end= arr.length-1, count=0) {
            count++;
            
        
            if (start > end) {
                newThis.setState({
                    input: 'Not found',
                    count: 'none'
                })
                return;
            }
        
            const index = Math.floor((start + end) / 2);
            const item = arr[index];
        
            console.log(start, end);
            if (item === value) {
                newThis.setState({
                    input: value,
                    count: count
                })
                return;
            }
            else if (item < value) {
                return binarySearch(arr, value, index + 1, end, count);
            }
            else if (item > value) {
                return binarySearch(arr, value, start, index - 1, count);
            }
        };
          return (
            <div>
            <form onSubmit={event => {
                event.preventDefault();
                const input = event.target.number;
                console.log(input);
                
        
              }}>
                <div className="textarea">
                    <h1>Enter Number</h1>
                    <label>Linear Search</label>
                    <input onChange={(event)=> (linearSearch(arr, event.target.value))}/>
                    <label>Binary Search</label>
                    <input onChange={(event)=> (binarySearch(arr, event.target.value))}/>
                    <p>Number: {this.state.input},</p>
                    <p>Iterations: {this.state.count}</p>
                </div>
            </form>



                <p>Find a Book</p>
                <p>To find a book in the library with the Dewey Decimal index, first 
                    you'd have to identify the books dewey. From there, use a binary search 
                    method to cut down the database in half. Then see which half has the 
                    number and get rid of the other half. Then repeat the process and check the middle 
                    and eliminate the rest until the element is found. Resulting with logarithmic method 
                    as the worst case. 
                </p>
            </div>
          );
      }
}



const library = [
    { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
    { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
    { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
    { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
    { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
    { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
    { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
    { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
    { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
    { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
  ];