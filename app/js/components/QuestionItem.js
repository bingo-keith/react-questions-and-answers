var React = require('react');//引入react

module.exports = React.createClass({
  voteUp(e){//增加排序值
    var newCount = parseInt(this.props.voteCount, 10) + 1;
    this.props.onVote(this.props.questionKey, newCount);//调用父组件方法用props
  },
  voteDown(e){//减少排序值
    var newCount = parseInt(this.props.voteCount, 10) - 1;
    this.props.onVote(this.props.questionKey, newCount);
  },
  render(){
    return (
      <div className="media">
        <div className="media-left">
          <button className="btn btn-default" onClick={this.voteUp}>
            <span className="glyphicon glyphicon-chevron-up"></span>
            <span className="vote-count">{this.props.voteCount}</span>
          </button>
          <button className="btn btn-default" onClick={this.voteDown}>
            <span className="glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
        <div className="media-body">
          {/*引用父组件的数据用props*/}
          <h4 className="media-heading">{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
})