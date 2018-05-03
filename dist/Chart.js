'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Chart.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _BarChart=require('./BarChart');var _BarChart2=_interopRequireDefault(_BarChart);
var _LineChart=require('./LineChart');var _LineChart2=_interopRequireDefault(_LineChart);
var _PieChart=require('./PieChart');var _PieChart2=_interopRequireDefault(_PieChart);
var _yAxis=require('./yAxis');var _yAxis2=_interopRequireDefault(_yAxis);
var _xAxis=require('./xAxis');var _xAxis2=_interopRequireDefault(_xAxis);
var _constants=require('./constants');var C=_interopRequireWildcard(_constants);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
default:{}});


var getRoundNumber=function getRoundNumber(value,gridStep){
if(value<=0)return 0;
var logValue=Math.log10(value);
var scale=Math.pow(10,Math.floor(logValue));
var n=Math.ceil(value/scale*4);

var tmp=n%gridStep;
if(tmp!==0)tmp+=gridStep-tmp;
return n*scale/4.0;
};var


Chart=function(_Component){_inherits(Chart,_Component);
































function Chart(props){_classCallCheck(this,Chart);var _this=_possibleConstructorReturn(this,(Chart.__proto__||Object.getPrototypeOf(Chart)).call(this,
props));_this.






















































































_onContainerLayout=function(e){return _this.setState({
containerHeight:e.nativeEvent.layout.height,
containerWidth:e.nativeEvent.layout.width});};_this.state={bounds:{min:0,max:0}};return _this;}_createClass(Chart,[{key:'componentDidMount',value:function componentDidMount(){this._computeBounds();}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(props,state){return props!==this.props||state!==this.state;}},{key:'componentDidUpdate',value:function componentDidUpdate(props){if(this.props!==props){this._computeBounds();}}},{key:'_computeBounds',value:function _computeBounds(){var min=Infinity;var max=-Infinity;var data=this.props.data||[[]];data.forEach(function(Graph){Graph.forEach(function(XYPair){var number=XYPair[1];if(number===''){return;}if(number<min)min=number;if(number>max)max=number;});});var ceilMax=Math.ceil(max);var floorMin=Math.floor(min);if(ceilMax-floorMin>this.props.verticalGridStep){min=floorMin;max=ceilMax;}if(this.props.tightBounds){return this.setState({bounds:{min:min,max:max}});}max=getRoundNumber(max,this.props.verticalGridStep);if(min<0){var step=void 0;if(this.props.verticalGridStep>3){step=Math.abs(max-min)/(this.props.verticalGridStep-1);}else{step=Math.max(Math.abs(max-min)/2,Math.max(Math.abs(min),Math.abs(max)));}step=getRoundNumber(step,this.props.verticalGridStep);var newMin=void 0;var newMax=void 0;if(Math.abs(min)>Math.abs(max)){var m=Math.ceil(Math.abs(min)/step);newMin=step*m*(min>0?1:-1);newMax=step*(this.props.verticalGridStep-m)*(max>0?1:-1);}else{var _m=Math.ceil(Math.abs(max)/step);newMax=step*_m*(max>0?1:-1);newMin=step*(this.props.verticalGridStep-_m)*(min>0?1:-1);}if(min<newMin){newMin-=step;newMax-=step;}if(max>newMax+step){newMin+=step;newMax+=step;}if(max<min){var tmp=max;max=min;min=tmp;}}return this.setState({bounds:{max:max,min:min}});}},{key:'_minVerticalBound',value:function _minVerticalBound()


{
if(this.props.tightBounds)return this.state.bounds.min;
return this.state.bounds.min>0?this.state.bounds.min:0;
}},{key:'_maxVerticalBound',value:function _maxVerticalBound()

{
if(this.props.tightBounds)return this.state.bounds.max;
return this.state.bounds.max>0?this.state.bounds.max:0;
}},{key:'render',value:function render()

{var _this2=this;
var components={'line':_LineChart2.default,'bar':_BarChart2.default,'pie':_PieChart2.default};
var axisAlign=this.props.type==='line'?'left':'center';
return(
_react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:171}},
function(){
var ChartType=components[_this2.props.type]||_BarChart2.default;
if(_this2.props.showAxis&&Chart!==_PieChart2.default){
return(
_react2.default.createElement(_reactNative.View,{
ref:'container',
style:[_this2.props.style||{},{flex:1,flexDirection:'column'}],
onLayout:_this2._onContainerLayout,__source:{fileName:_jsxFileName,lineNumber:176}},

_react2.default.createElement(_reactNative.View,{style:[styles.default,{flexDirection:'row'}],__source:{fileName:_jsxFileName,lineNumber:181}},
_react2.default.createElement(_reactNative.View,{ref:'yAxis',__source:{fileName:_jsxFileName,lineNumber:182}},
_react2.default.createElement(_yAxis2.default,_extends({},
_this2.props,{
data:_this2.props.data,
height:_this2.state.containerHeight-_this2.props.xAxisHeight,
width:_this2.props.yAxisWidth,
minVerticalBound:_this2.state.bounds.min,
containerWidth:_this2.state.containerWidth,
maxVerticalBound:_this2.state.bounds.max,
yAxisUseDecimal:_this2.props.yAxisUseDecimal,
yAxisShortLabel:_this2.props.yAxisShortLabel,
style:{width:_this2.props.yAxisWidth},__source:{fileName:_jsxFileName,lineNumber:183}}))),


_react2.default.createElement(ChartType,_extends({},
_this2.props,{
data:_this2.props.data,
width:_this2.state.containerWidth-_this2.props.yAxisWidth,
height:_this2.state.containerHeight-_this2.props.xAxisHeight,
minVerticalBound:_this2.state.bounds.min,
maxVerticalBound:_this2.state.bounds.max,__source:{fileName:_jsxFileName,lineNumber:196}}))),


function(){
return(
_react2.default.createElement(_reactNative.View,{ref:'xAxis',__source:{fileName:_jsxFileName,lineNumber:207}},
_react2.default.createElement(_xAxis2.default,_extends({},
_this2.props,{
width:_this2.state.containerWidth-_this2.props.yAxisWidth,
data:_this2.props.data,
height:_this2.props.xAxisHeight,
align:axisAlign,
style:{marginLeft:_this2.props.yAxisWidth-1},__source:{fileName:_jsxFileName,lineNumber:208}}))));



}()));


}
return(
_react2.default.createElement(_reactNative.View,{
ref:'container',
onLayout:_this2._onContainerLayout,
style:[_this2.props.style||{},styles.default],__source:{fileName:_jsxFileName,lineNumber:223}},

_react2.default.createElement(ChartType,_extends({},
_this2.props,{
data:_this2.props.data,
width:_this2.state.containerWidth,
height:_this2.state.containerHeight,
minVerticalBound:_this2.state.bounds.min,
maxVerticalBound:_this2.state.bounds.max,__source:{fileName:_jsxFileName,lineNumber:228}}))));



}()));


}}]);return Chart;}(_react.Component);Chart.defaultProps={data:[[]],animated:true,animationDuration:300,axisColor:C.BLACK,axisLabelColor:C.BLACK,axisLineWidth:1,axisTitleColor:C.GREY,axisTitleFontSize:16,chartFontSize:14,color:[],dataPointRadius:3,gridColor:C.BLACK,gridLineWidth:0.5,hideHorizontalGridLines:false,hideVerticalGridLines:false,horizontalScale:1,labelFontSize:10,lineWidth:1,showAxis:true,showDataPoint:false,showGrid:true,showXAxisLabels:true,showYAxisLabels:true,tightBounds:false,verticalGridStep:4,xAxisHeight:20,yAxisWidth:30,yAxisUseDecimal:false,yAxisShortLabel:false};exports.default=Chart;


Chart.propTypes={


type:_propTypes2.default.oneOf(['line','bar','pie']).isRequired,
highlightColor:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),
highlightIndices:_propTypes2.default.arrayOf(_propTypes2.default.number),
onDataPointPress:_propTypes2.default.func,
yAxisUseDecimal:_propTypes2.default.bool,
yAxisShortLabel:_propTypes2.default.bool,


color:_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string])),
cornerRadius:_propTypes2.default.number,

widthPercent:_propTypes2.default.number,


fillColor:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),
dataPointColor:_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string])),
dataPointFillColor:_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string])),
dataPointRadius:_propTypes2.default.number,

lineWidth:_propTypes2.default.number,
showDataPoint:_propTypes2.default.bool,



sliceColors:_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string])),
animationDuration:_propTypes2.default.number,
axisColor:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),
axisLabelColor:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),
axisLineWidth:_propTypes2.default.number,





gridColor:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),
gridLineWidth:_propTypes2.default.number,
hideHorizontalGridLines:_propTypes2.default.bool,
hideVerticalGridLines:_propTypes2.default.bool,

showAxis:_propTypes2.default.bool,
showGrid:_propTypes2.default.bool,
showXAxisLabels:_propTypes2.default.bool,
showYAxisLabels:_propTypes2.default.bool,
style:_propTypes2.default.any,
tightBounds:_propTypes2.default.bool,
verticalGridStep:_propTypes2.default.number,
horizontalGridStep:_propTypes2.default.number,

xAxisHeight:_propTypes2.default.number,
xAxisTransform:_propTypes2.default.func,

yAxisTransform:_propTypes2.default.func,
yAxisWidth:_propTypes2.default.number};