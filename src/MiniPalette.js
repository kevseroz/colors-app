import React, {PureComponent} from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'


class MiniPalette extends PureComponent {

    constructor(props){
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }
    deletePalette(e) {
        e.stopPropagation();
        this.props.openDialog(this.props.id)
    }
    render(){
        const { classes, paletteName, emoji, colors, handleClick, id } = this.props;
        const miniColorBoxes                          = colors.map(color => (
            <div
                className = {classes.miniColor}
                style     = {{backgroundColor: color.color}}
                key       = {color.name}
                />
                ));

    
    return (
        <div className={classes.root} onClick={() => handleClick(id)}>
                <DeleteIcon 
                className={classes.deleteIcon}
                onClick={this.deletePalette}
                 />
           
            <div className={classes.colors}>{miniColorBoxes} </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emojşi}>{emoji}</span> </h5>
        </div>
    )
}
}
// burada minipalette e withStyles ile stil uygulaması yapıyor
//parantez içindeki styles ise üstte tanımladığımıız sınıf. 
//bu şekilde componentimizi alıp style ile başka bir componente dönüştürüyor denebilir
export default withStyles(styles)(MiniPalette);