import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import Form from '../components/ArticleForm'

class ArticleDetail extends React.Component{
    state = {
        article: {}
    }
    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/articles-api/${articleID}`)
            .then(res =>{
                this.setState({
                    article: res.data
                });
            }

            )
    }
    delete = (event) =>{
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/articles-api/${articleID}`)
            .then(res =>{
                this.setState({
                    article: res.data
    });
    this.props.history.push('/')
}
            )
}
    render(){
        return(
            <div>
                <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
                </Card>
                <Form requestType='put' articleID={this.props.match.params.articleID} btnText='update'/>
                <label id='delete'>Delete</label>
                <form>
                    <input id='delete' type='submit' onSubmit={this.delete} />
                </form>

            </div>
            
        )
    }
}

export default ArticleDetail;