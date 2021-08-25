import Footer from './Footer'
import Header from './Header'
import './Layout.css'

export default function Layout(props) {

    return (
        <>
            <Header currentUser={props.currentUser} handleLogout={props.handleLogout}/>
            <main className="layout-main">
                {props.children}
            </main>
            <Footer />
        </>
    )
}
