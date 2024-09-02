import ProjectSlider from "@/components/ProjectSlider";

const Page = () => {
    return (
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]">
            <div className="flex flex-col gap-3">
                <h1 className="text-[50px] text-white font-semibold">
                    My Work <span className="text-red-500">.</span>
                </h1>
                <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus class fames amet at porta senectus est.
                    Platea aenean penatibus, ipsum justo tempor hendrerit. Habitasse lectus taciti leo accumsan eget est.
                    Vel vehicula neque ligula turpis metus curae nec lectus.
                </p>
            </div>
            <ProjectSlider />
        </div>
    )
}

export default Page