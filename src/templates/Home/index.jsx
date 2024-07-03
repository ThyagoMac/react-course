import React from 'react';
import { useCallback, useEffect, useState } from 'react';

import './styles.css'
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = currentPage + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      : posts;

  const handleLoadPosts = useCallback(
    async (currentPage, postsPerPage) => {
      const finalPosts = await loadPosts();

      setPosts(finalPosts.slice(currentPage, postsPerPage),);
      setAllPosts(finalPosts);
    },
    []
  )

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextpage = currentPage + postsPerPage;
    const nextPosts = allPosts.slice(nextpage, nextpage + postsPerPage);

    posts.push(...nextPosts);

    setPosts(posts);
    setCurrentPage(nextpage);
  }

  const handleSearch = (event) => {
    const { value } =  event.target;
    setSearchValue(value);
  }

  return (
    <section className='container'>
      <div className='search-wrapper'>
        <TextInput
          placeholder="Filter posts"
          searchValue={searchValue}
          handleSearch={handleSearch}
          />
      </div>

      <h3 className="posts-count">Posts {filteredPosts.length} from {allPosts.length}</h3>
      {filteredPosts.length < 1 && (
        <div>No posts found</div>
      )}
      <Posts posts={filteredPosts} />
      <div className='button-wrapper'>
        {!searchValue && (
          <Button
            disabled={noMorePosts}
            text="More Posts"
            onClick={loadMorePosts}
          >
          </Button>
        )}
      </div>
    </section>
  );
}
