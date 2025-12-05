import * as zod from "zod";
 
export const updateProfileSchema = zod.object({
  name: zod.string("نام کاربری الزامی است").min(5, "نام حداقل 5 کاراکتر باشد"),
  email: zod.email("ایمیل نامعتبر است"),
});
