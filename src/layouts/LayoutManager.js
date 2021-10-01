import { withRouter } from 'react-router';
// import { get } from 'lodash';
import MainLayout from './MainLayout/MainLayout';

const LayoutManager = ({children, location}) => {
    const getPath = (path) => {
        // if (isEqual(path, '/')) return 'landing';
        // if (includes(path, 'auth')) return 'auth';
        return 'main';
    }
    const getLayout = () => {
        return {
            main : MainLayout,
        }
    }
    // const Layout = getLayout()[getPath(get(location, 'pathname', 'dashboard'))]
    const Layout = getLayout()[getPath(location.pathname)]
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default withRouter(LayoutManager)
