var React = require('react');//引入react
var ShowAddButton = require('./ShowAddButton.js');//引入子组件
var QuestionForm = require('./QuestionForm.js');//引入子组件
var QuestionList = require('./QuestionList.js');//引入子组件
var _ = require('lodash');//引入原生js工具库文件

module.exports = React.createClass({
  getInitialState(){//初始化状态
    var questions = [
      {
        key: 1,
        title:'产品经理与程序员矛盾的本质是什么？',
        description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
        voteCount: 10,
      },
      {
        key: 2,
        title:'热爱编程是一种怎样的体验？',
        description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
        voteCount: 8,
      },
    ];
    return {
      questions: questions,
      formDisplayed: false,
    }
  },
  onToggleForm(){//控制表单的显示隐藏方法
    this.setState({
      formDisplayed: !this.state.formDisplayed,
    })
  },
  onNewQuestion(newQuestion){//添加新新问题的方法
    newQuestion.key = this.state.questions.length + 1;//新问题的长度
    var newQuestions = this.state.questions.concat( newQuestion );//合并问题数组
    this.setState({//设置问题的状态
      questions: newQuestions,
    });
  },
  sortQuestion(questions){//问题排序方法
    questions.sort((a,b) => {
      return b.voteCount - a.voteCount;
    });
    return questions;
  },
  onVote(key, newCount){//问题排序方法
    var questions = _.uniq( this.state.questions );
    var index = _.findIndex( questions, (qst) => {//查找指定问题的索引
      return qst.key == key;
    } );
    questions[index].voteCount = newCount;//问题排序值
    questions = this.sortQuestion(questions);//对问题进行排序
    this.setState({//设置问题的状态
      questions: questions
    })
  },
  render(){
    return (
      <div>
        <div className="jumbotron text-center">
            <div className="container">
              <h1>React问答</h1>
              <ShowAddButton onToggleForm={this.onToggleForm} />
            </div>
        </div>
        <div className="main container">
          <QuestionForm
            /*虚拟DOM上把当前组件的方法和属性向子组件传递*/
            onNewQuestion={this.onNewQuestion}
            onToggleForm={this.onToggleForm}
            formDisplayed={this.state.formDisplayed} />
          <QuestionList onVote={this.onVote} questions={this.state.questions} />
        </div>
      </div>
    )
  }
})