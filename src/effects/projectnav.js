import '../cssfiles/Project.css'
const ProjectNav = () => {
  return (
<div className="flex justify-center mt-20 ">
    <div className="grid ml-1 mr-1 rounded-[15px] p-2 text-center gap-3 text-[18px]   w-[400px] sm:w-[700px] grid-cols-3 ">
        <div className="projectbutton">Web App</div>
        <div className="projectbutton relative cursor-move p-2">ML Gallery</div> 
        <div className="projectbutton relative cursor-move p-2">ML + Web</div>
    </div>
</div>

  )
}

export default ProjectNav