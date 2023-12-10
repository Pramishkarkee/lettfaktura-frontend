import Table from "react-bootstrap/Table";
import { FaArrowRight } from "react-icons/fa";
import { colors } from "../constants/colors";
import { FaArrowDown } from "react-icons/fa6";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

type data = {
  article_no: string;

  buying_price: string;
  created_at: string;

  description: string;

  id: string;

  product_service: string;

  selling_price: string;
  stock: string;

  unit: string;

  updated_at: string;
};

interface Iprops {
  productquery: string;
  articelquery: string;
}
function MyTable({ articelquery, productquery }: Iprops) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalpage, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [next, setNext] = useState();
  const [loadeddata, setLoadeddata] = useState<any>(null);
  const observer = useRef<IntersectionObserver>();
  const loader = useRef<HTMLDivElement>(null);

  console.log(data);
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (next!==null) {
        if (entries[0].isIntersecting && entries) {
          setPage((prev) => prev + 1);
        }
      }
    });

    if (loader.current) {
      observer.current.observe(loader.current);
    }

    if (next===null) {
      observer.current.disconnect()
    }
    return () => {
      if (observer.current) {
        observer?.current?.disconnect();
      }
    };
  });

  useEffect(() => {
    // Replace with your API endpoint

    const apiUrl = "http://167.172.170.35:9095/v1/product/price/list";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            article_no: articelquery,
            search: productquery,
            offset: page,
          },
        });
        const { results, count, next } = response.data;

        setData(response?.data?.results);
        setNext(next);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productquery, articelquery]); // The empty

  useEffect(() => {
    setLoadeddata((prev: any) => [...(prev ?? []), ...(data ?? [])]);
  }, [data, page]);

  return (
    <div className="overflow-x-auto p-6">
      <Table>
        <thead>
          <tr>
            <th className="mx-4"></th>
            <th className="mx-4 relative">
              <span className="flex items-center gap-4 ml-4">
                Article No. <FaArrowDown className="" color={colors.primary} />
              </span>
            </th>
            <th className="mx-4   relative ">
              <span className="flex items-center gap-4 ml-4">
                Product/Service{" "}
                <FaArrowDown className="" color={colors.green} />
              </span>{" "}
            </th>
            <th className="mx-4">In Price</th>
            <th className="mx-4">Price</th>
            <th className="mx-4">Unit</th>
            <th className="mx-4">In Stock</th>
            <th className="mx-4">Description</th>
          </tr>
        </thead>
        <tbody className="mx-4 w-full">
          {loadeddata?.map((d: data) => (
            <tr className="mx-4" key={d?.id}>
              <td className="pt-4">
                <FaArrowRight color={colors.green} />{" "}
              </td>
              <td className="pt-4">
                <span className="border-2 p-1 rounded-full">
                  {d?.article_no}
                </span>
              </td>

              <td className="pt-4">
                <span className="border-2 px-2 py-1   whitespace-nowrap rounded-full">
                  {d?.product_service}
                </span>
              </td>
              <td className="pt-4">
                <span className="border-2 px-2 py-1 whitespace-nowrap  rounded-full">
                  {d?.buying_price}
                </span>
              </td>
              <td className="pt-4">
                <span className="border-2 px-2 py-1 whitespace-nowrap  rounded-full">
                  {d?.selling_price}
                </span>
              </td>
              <td className="pt-4">
                <span className="border-2 px-2 whitespace-nowrap  rounded-full">
                  3
                </span>
              </td>
              <td className="pt-4">
                <span className="border-2 px-2    whitespace-nowrap  rounded-full">
                  {d?.stock}
                </span>
              </td>
              <td className="pt-4">
                <span className="border-2 px-2 py-1 whitespace-nowrap  rounded-full">
                  {d?.description}
                </span>
              </td>
            </tr>
          ))}
          <div
            ref={loader}
            style={{ height: "10px", background: "transparent" }}
          />
          {/* <td className="mx-4">
              <span className="border-2 rounded-full p-1 whitespace-nowrap">
                This is a test with Fifty characters this!
              </span>{" "}
            </td> */}

          {/* <td className="mx-4">
              <span className="border-2 rounded-full p-1 whitespace-nowrap">
                Kilometers/hour{" "}
              </span>{" "}
            </td> */}
          {/* <td className="mx-4">
              <span className="border-2 rounded-full p-1 whitespace-nowrap ">
                25800
              </span>{" "}
            </td> */}
          {/* <td className="mx-4">
              <span className="border-2 rounded-full p-1 whitespace-nowrap">
                This is a test with Fifty characters this!
              </span>{" "}
            </td> */}
        </tbody>
      </Table>
    </div>
  );
}

export default MyTable;
