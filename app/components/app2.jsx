
var Browser = React.createClass({
    render:function(){
        return (
            <div>
                <h3>Browser Share</h3>
                <div className="pad bottom-left-svg">
                    <DonutChart id="bs_chart" padAngle={0.03}/>
                </div>
            </div>
        )
    }
});

var RetVisitors = React.createClass({
    render:function(){
        return (
            <div>
                <h3>Returning Visitors</h3>
                <div className="pad bottom-right-svg">
                    <ProgressChart />
                    <br/>
                    <BarChart />
                </div>
            </div>
        )
    }
});

var Visitors = React.createClass({
    render:function(){
        return (
            <div>
                <h3>Visitors to your site</h3>
                <div className="bottom-right-svg">
                    <LineChart/>
                </div>
            </div>
        )
    }
});

var Page = React.createClass({
    render:function(){

        return (
            <div className="pure-g container">
               <div className="pure-u-1">
                                    <div className="top fontSize">
                                        <a className="page-header" href="http://www.adeveloperdiary.com/d3-js/how-to-integrate-react-and-d3-the-right-way/"><h4 className="page-h4">(React + D3) Click here to view the full tutorial on adeveloperdiary.com</h4></a>
                                    </div>
                </div>
                <div className="pure-u-1">
                    <div className="top" id="top-line-chart">
                        <Visitors/>
                     </div>
                </div>
                <div className="pure-u-5-12">
                     <div className="bottom-left" id="browser">
                        <Browser/>
                     </div>
                </div>
                <div className="pure-u-7-12">
                    <div className="bottom-right" id="ret_visitors">
                       <RetVisitors/>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<Page/>,document.getElementById("page"));
ReactDOM.render(<Browser/>,document.getElementById("browser"));
ReactDOM.render(<RetVisitors/>,document.getElementById("ret_visitors"));
ReactDOM.render(<Visitors/>,document.getElementById("top-line-chart"));






