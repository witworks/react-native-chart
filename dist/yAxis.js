Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/yAxis.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _util=require('./util');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
yAxisContainer:{
flexDirection:'column',
justifyContent:'space-between',
flex:1,
paddingVertical:0,
paddingRight:5,
alignItems:'flex-end'}});var




YAxis=function(_Component){_inherits(YAxis,_Component);

















function YAxis(props){_classCallCheck(this,YAxis);var _this=_possibleConstructorReturn(this,(YAxis.__proto__||Object.getPrototypeOf(YAxis)).call(this,
props));_this.


















_createLabelForYAxis=function(index){
var minBound=_this.props.minVerticalBound;
var maxBound=_this.props.maxVerticalBound;


if(minBound===maxBound){
minBound-=_this.props.verticalGridStep;
maxBound+=_this.props.verticalGridStep;
}
minBound=minBound<0?0:minBound;
var label=minBound+(maxBound-minBound)/_this.props.verticalGridStep*index;
label=parseFloat(label.toFixed(3));

if(!_this.props.yAxisUseDecimal){
label=Math.round(label);
}

if(_this.props.yAxisShortLabel){
label=_this.shortenLargeNumber(label,_this.props.yAxisUseDecimal);
}


if(_this.props.yAxisTransform&&typeof _this.props.yAxisTransform==='function'){
label=_this.props.yAxisTransform(label);
}
return(
_react2.default.createElement(_reactNative.Text,{
style:{
color:_this.props.axisLabelColor,
fontSize:_this.props.labelFontSize},

key:index,__source:{fileName:_jsxFileName,lineNumber:84}},

label));


};_this.state={bounds:{min:0,max:0}};return _this;}_createClass(YAxis,[{key:'shortenLargeNumber',value:function shortenLargeNumber(num,useDecimal){var digits=useDecimal?2:0;var units=['K','M','B','t','P','E','Z','Y'],decimal;for(var i=units.length-1;i>=0;i--){decimal=Math.pow(1000,i+1);if(num<=-decimal||num>=decimal){return+(num/decimal).toFixed(digits)+units[i];}}return num;}},{key:'render',value:function render()

{
var range=[];
var data=(0,_util.uniqueValuesInDataSets)(this.props.data||[[]],1);
var steps=data.length<this.props.verticalGridStep?data.length:this.props.verticalGridStep;
for(var i=steps;i>=0;i--){range.push(i);}
return(
_react2.default.createElement(_reactNative.View,{
style:[
styles.yAxisContainer,
this.props.style||{},
this.props.placement==='left'&&{borderRightColor:this.props.axisColor,borderRightWidth:this.props.axisLineWidth},
this.props.placement==='right'&&{borderLeftColor:this.props.axisColor,borderLeftWidth:this.props.axisLineWidth}],__source:{fileName:_jsxFileName,lineNumber:102}},


range.map(this._createLabelForYAxis)));


}}]);return YAxis;}(_react.Component);YAxis.propTypes={axisColor:_propTypes2.default.any,axisLineWidth:_propTypes2.default.number,data:_propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.array)).isRequired,height:_propTypes2.default.number.isRequired,placement:_propTypes2.default.oneOf(['left','right']),verticalGridStep:_propTypes2.default.number.isRequired,yAxisTransform:_propTypes2.default.func,yAxisUseDecimal:_propTypes2.default.bool,yAxisShortLabel:_propTypes2.default.bool};YAxis.defaultProps={placement:'left'};exports.default=YAxis;