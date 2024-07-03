import React from 'react';
import { Component } from 'react';

import './styles.css'
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    currentPage: 0,
    postsPerPage: 3,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { currentPage, postsPerPage } = this.state;
    const finalPosts = await loadPosts();
    this.setState({
      posts: finalPosts.slice(currentPage, postsPerPage),
      allPosts: finalPosts,
    });

  }

  loadMorePosts = () => {
    const { currentPage, postsPerPage, allPosts, posts } = this.state;

    const nextpage = currentPage + postsPerPage;
    const nextPosts = allPosts.slice(nextpage, nextpage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({
      posts: posts,
      currentPage: nextpage,
    });

  }

  handleSearch = (event) => {
    const { value } =  event.target;
    this.setState({ searchValue: value });
  }

  render() {
    //const posts = this.state.posts;
    const { posts, allPosts, currentPage, postsPerPage, searchValue, } = this.state;

    const noMorePosts = currentPage + postsPerPage >= allPosts.length;

    const filteredPosts = searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      : posts;

    return (
      <section className='container'>
        <h3>Posts {filteredPosts.length} from {allPosts.length}</h3>
        <div className='search-wrapper'>
          <TextInput
            placeholder="Filter posts"
            searchValue={searchValue}
            handleSearch={this.handleSearch}
          />
        </div>

        {filteredPosts.length < 1 && (
          <div>No posts found</div>
        )}
        <Posts posts={filteredPosts} />
        <div className='button-wrapper'>
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text="More Posts"
              onClick={this.loadMorePosts}
            >
            </Button>
          )}
        </div>
      </section>
    )
  };
}
