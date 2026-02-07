import Tooltip from '@mui/material/Tooltip';

const TechImg=({data})=>{
    return (
        <Tooltip title={data.toUpperCase()} arrow>
            <img className="hover:scale-110 h-24 w-36 mb-8 opacity-100" src={`https://mern-rajesh-portfolio.web.app/assets/tech/${data}.png`} alt="logo" />
        </Tooltip>
    );
}
export default TechImg;