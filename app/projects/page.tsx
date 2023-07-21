import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function Projects() {
  return (
      <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
              <Card className="border-none notebook-lines flex-grow">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">2022</p>
                      <small className="text-default-500">Like September. I think.</small>
                      <h4 className="font-bold text-large">My First Website 🥺</h4>
                  </CardHeader>
                  <CardBody className="p-notebook-line backdrop-blur-sm">
                      <h1></h1>
                      <p>yadadadadadadad</p>
                      <p>yadadadadadadad</p>
                      <p>yadadadadadadad</p>
                  </CardBody>
              </Card>
              <Image isZoomed alt="NextUI Fruit Image with Zoom" src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg" />
          </div>
          <div className="flex flex-row gap-4">
              <Image isZoomed alt="NextUI Fruit Image with Zoom" src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg" />
              <Card className="border-none notebook-lines flex-grow">
                  <CardBody className="p-notebook-line backdrop-blur-sm">
                      <p>yadadadadadadad</p>
                  </CardBody>
              </Card>
          </div>
      </div>
  )
  
}
