import type { IField } from "@/components/LForm";
import { ref } from "vue";
import * as yup from "yup";

yup.addMethod(yup.boolean, "isTrue", function () {
  return this.oneOf([true]);
});

const useValidate = () => {
  const errors = ref<{ [key: string]: any }>({});
  const createYupSchema = (schema: { [key: string]: any }, config: any) => {
    const { name, vtype, rules = [] } = config;
    if (!yup[vtype]) {
      return schema;
    }
    let validator = yup[vtype]();
    rules.forEach((validation: { params: []; type: string }) => {
      const { params, type } = validation;
      if (!validator[type]) {
        return;
      }
      const p: [] = [];
      if (params) {
        if (Array.isArray(params)) {
          p.push(...params);
        } else {
          p.push(params);
        }
      }
      validator = validator[type](...p);
    });
    schema[name] = validator;

    return schema;
  };

  // let validationSchema = {}
  let formSchema = {};
  /**
   * Функция создания схемы валидации
   * @param schema - массив полей схемы
   * @returns схема валидации
   */
  const onCreateSchema = (schema: IField[]) => {
    const schemaValidate = schema.reduce(createYupSchema, {});
    formSchema = yup.object().shape(schemaValidate);
    // console.log('formSchema', formSchema)

    return schemaValidate;
  };
  // const formSchema = yup.object().shape(validationSchema)

  const createMessageError = (field: string, err: any) => {
    if (typeof err.message === "object") {
      errors.value[field] = err.message.v;
    } else {
      errors.value[field] = err.message;
    }
  };

  const onValidate = async (field: string, model: any) => {
    if (formSchema.fields[field]) {
      await formSchema
        .validateAt(field, model)
        .then(() => {
          errors.value[field] = null;
          delete errors.value[field];
        })
        .catch((err) => {
          createMessageError(field, err);
        });
    } else {
      console.info(`Не найдены правила валидации для поля ${field}!`);
    }
    // console.log('formSchema', formSchema)
  };
  const onFormValidate = async (model: any) => {
    // console.log('onFormValidate', formSchema, model)

    await formSchema
      .validate(model, { abortEarly: false })
      // .then(() => { })
      .catch((err) => {
        err.inner.forEach((error: any) => {
          // const newError =
          createMessageError(error.path, error);
          // errors.value = {
          //   ...errors.value,
          //   // [error.path]: error.message
          //   ...newError,
          // }
        });
      });
  };
  return {
    onCreateSchema,
    errors,
    onValidate,
    createYupSchema,
    onFormValidate,
  };
};

export { useValidate };
