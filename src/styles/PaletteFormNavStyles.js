import { DRAWER_WİDTH } from "./constants"
import sizes from './sizes'

const drawerWidth = DRAWER_WİDTH;
const styles = theme => ({
  root:{
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down("xs")]: {
      marginRight: 0,
    }
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      margin: 0,
      padding: 0
    }
  },
  link: {
    textDecoration: "none",
  }
})

export default styles;