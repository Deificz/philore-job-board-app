"use client";
import FieldGenerator from "@/components/layout-components/FieldGenerator";
import { Label } from "@/components/ui/label";
import { Row } from "@/components/ui/row";
import React, { useEffect } from "react";

import { skill_options, user_fields } from "./utils/constants";
import { Form } from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Col } from "@/components/ui/col";
import { Button } from "@/components/ui/button";
import { useLoader } from "@/contexts/LoaderProvider";
import { useNotif } from "@/contexts/NotifProvider";
import { delay } from "@/lib/utils";
import { useMyProfile } from "./hooks/useMyProfile";
import { ProfileDetails } from "../job-board/types/ProfileDetails";

type Props = {};

export default function MyProfile({}: Props) {
  const form = useForm();
  const { handleSubmit, reset } = form;
  const { setLoading } = useLoader();
  const { open } = useNotif();
  const { user, getProfile, updateProfile } = useMyProfile();

  const handleGetProfile = async () => {
    try {
      await getProfile(1);
    } catch {
      console.error();
    } finally {
    }
  };

  const handleUpdateProfile: SubmitHandler<ProfileDetails> = async (data) => {
    try {
      setLoading(true);
      const formatSkills = skill_options
        ?.filter((skill) => data?.skills?.includes(skill?.value))
        ?.map((skill) => skill?.label);
      const formatData = { ...data, skills: formatSkills };
      await delay(1000);
      await updateProfile(1, formatData);
    } catch {
      console.error();
    } finally {
      setLoading(false);
      open({
        message: `Updated`,
        type: "success",
      });
    }
  };

  const hydrateForm = () => {
    const skillsFiltered = skill_options
      ?.filter((skill) => user?.skills?.includes(skill?.label))
      ?.map((skill) => skill?.value);
    reset({
      ...user,
      skills: skillsFiltered,
    });
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  useEffect(() => {
    hydrateForm();
  }, [user]);

  return (
    <>
      <Label className="text-3xl justify-center my-7">My Profile 📋</Label>
      <div className="flex justify-center items-center">
        <Col className="m-5 w-90 md:w-310 border-5 border-double border-amber-400 p-10 rounded-2xl">
          <Label className="text-xl  my-7">Details 🖊️</Label>
          <Row className="flex-wrap">
            <Form {...form}>
              <FieldGenerator fields={user_fields} form={form} />
            </Form>
          </Row>
          <Row className="justify-end">
            <Button
              className="bg-green-600 cursor-pointer w-30 hover:bg-white border-2 hover:border-green-600 hover:text-green-600"
              onClick={handleSubmit(handleUpdateProfile)}
            >
              Save
            </Button>
          </Row>
        </Col>
      </div>
    </>
  );
}
