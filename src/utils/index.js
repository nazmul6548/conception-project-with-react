
import toast from 'react-hot-toast';

export const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blog');
    if (storedBlogs) {
        blogs=JSON.parse(storedBlogs)
    }
    return blogs

}
export const saveBlog = (blog) => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id)
    if (isExist) {
         toast.error('Successfully toasted! ale');
         return;
    }
    blogs.push(blog)
    localStorage.setItem('blog', JSON.stringify(blogs))
    toast.success('Successfully toasted!')
}
export const deleteBlog = (id) => {
    let blogs = getBlogs();
    const remaining = blogs.filter(b=>b.id !== id);
    localStorage.setItem('blog', JSON.stringify(remaining));
    toast.success('Blog deleted successfully!')
}
