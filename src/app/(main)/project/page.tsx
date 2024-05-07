import BoxRole from "@/components/project/box.role";
import { sendRequest } from "@/utils/api";
import Image from "next/image";

const ProjectPage = async () => {

  // Fetch Data Roles
  const listRole = await sendRequest<IBackendRes<IRole>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/roles`,
    method: 'GET',
    nextOption: { cache: 'no-store' }
  })

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-[18rem] md:py-[20rem]">
      {
        listRole?.data?.result.map((item: IRole, index: number) => (
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