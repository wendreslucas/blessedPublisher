import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import PropsRoute from '../../shared/components/PropsRoute';
import Home from './home/Home';
import Blog from './blog/Blog';
import BlogPost from './blog/BlogPost';
import useLocationBlocker from '../../shared/functions/useLocationBlocker';

function Routing(props) {
	const { blogPosts, selectBlog, selectHome } = props;
	useLocationBlocker();

	return (
		<Routes>
			{blogPosts.map((post) => (
				<Route
					path={post.url}
					element={
						<PropsRoute
							component={BlogPost}
							title={post.title}
							key={post.title}
							src={post.src}
							date={post.date}
							content={post.content}
							otherArticles={blogPosts.filter((blogPost) => blogPost.id !== post.id)}
						/>
					}
				/>
			))}
			<Route
				path="/blog"
				element={<Blog selectBlog={selectBlog} blogPosts={blogPosts} />}
			/>
			<Route path="/" element={<Home selectHome={selectHome} />} />
		</Routes>
	);
}

export default memo(Routing);
