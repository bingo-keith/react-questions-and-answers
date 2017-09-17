var React = require('react');
var QuestionItem = require('./QuestionItem.js');

module.exports = React.createClass({
  render(){
    // 调用父组件的数据questions
    var questions = this.props.questions;
    //数据格式异常抛出错误
    if (!Array.isArray(questions)) throw new Error('问题格式错误');
    //对数组形式的数组进行遍历生成新的虚拟DOM，并通过参数调用父组件的属性和方法
    var questionComps = questions.map((qst) => {
      return <QuestionItem key={qst.key}
        questionKey={qst.key}
        title={qst.title}
        description={qst.description}
        voteCount={qst.voteCount}
        onVote={this.props.onVote} />
    });
    return (
      <div id="questions" className="">
        {questionComps}{/*渲染该数组形式的虚拟DOM*/}
      </div>
    )
  }
})