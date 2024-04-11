import BoxRole from "@/components/project/box.role";
import { sendRequest } from "@/utils/api";

const ProjectPage = async () => {

  // Fetch Data Roles
  const listRole = await sendRequest<IBackendRes<IRole>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/roles`,
    method: 'GET',
  })

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-[18rem] md:py-[22rem]">
      {
        listRole.data?.result.map((item, index) => (
          <BoxRole
            key={item._id}
            role={item}
            isReverse={index % 2 === 0}
          />
        ))
      }
    </div>
  );
};

export default ProjectPage;