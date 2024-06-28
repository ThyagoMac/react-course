import { Component } from 'react';

import './styles.css'
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    currentPage: 0,
    postsPerPage: 10,
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

  render() {
    //const posts = this.state.posts;
    const { posts, allPosts, currentPage, postsPerPage, } = this.state;

    const noMorePosts = currentPage + postsPerPage >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className='button-wrapper'>
          <Button
            disabled={noMorePosts}
            text="More Posts"
            onClick={this.loadMorePosts}
          >
          </Button>
        </div>
      </section>
    )
  };
}
