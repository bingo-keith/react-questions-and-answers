var React = require('react');

module.exports = React.createClass({
  handleForm(e){
    e.preventDefault();
    //获取DOM节点用getDOMNode()或React.findDOMNode()方法
    //获取react对象用refs获取，切记用ref在DOM节点上声明
    if (!this.refs.title.getDOMNode().value) return;
    // 新问题的初数据
    var newQuestion = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.description.getDOMNode().value,
      voteCount: 0,
    };
    // 重置表单
    this.refs.addQuestionForm.getDOMNode().reset();
    // 利用props调用父组件的方法
    this.props.onNewQuestion(newQuestion);
  },
  render(){
    // 切记css样式用对象传递，并且属性值是驼峰形式
    var styleObj = {
      display: this.props.formDisplayed ? 'block' : 'none',
    };
    return (
      <form ref="addQuestionForm" name="addQuestion" className="clearfix" style={styleObj} onSubmit={this.handleForm} >
        <div className="form-group">
          <label htmlFor="qtitle">问题</label>
          <input type="text" ref="title" className="form-control" id="qtitle" placeholder="您的问题的标题" />
        </div>
        <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
        <button className="btn btn-success pull-right">确认</button>
        <a className="btn btn-default pull-right" onClick={this.props.onToggleForm} >取消</a>
      </form>
    )
  }
})