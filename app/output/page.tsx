"use client";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { useEffect } from "react";
import { addToCart, getProducts } from "../redux/slice";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";

export default function Output() {
  const output = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(output);

  return (
    <div>
        <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link href="/"> My-LOgo</Link>
          </div>
          <div className="space-x-4">
            <Link
              className="text-white font-bold hover:text-white"
              href="/cart"
            >
                 <div className=" flex "> < TiShoppingCart  className=" h-[25px] w-[30px]" />: {output?.cart.length}</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
      <div>
      <div className="grid grid-cols-3 gap-2 py-2 bg-green-700  items-center   ">
        {output?.products.map((item) => {
          return (
            <div>
              <div>
                <Card className="py-4 h-[500px]">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">
                      {item?.category}
                    </p>
                    <small className="text-default-500">
                      {item?.description?.slice(0, 150)}
                    </small>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src={item?.image}
                      width={150}
                      height={500}
                    />
                  </CardBody>
                  <h4 className=" ml-2 font-bold text-large">{item?.id}</h4>
                  <span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className=" ml-2 bg-purple-900 text-white p-2 rounded-lg"
                    >
                      Add to Cart
                    </button>
                  </span>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
