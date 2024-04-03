import Attribute from '@/components/ui/attribute';
// import { useAttributes } from './attributes.context';
import Scrollbar from '@/components/ui/scrollbar';
import { useAttributes } from './attributes.context';
import { useAtom } from 'jotai';
import { thumb_images } from '@/store/thumb-images-atom';
interface Props {
  variations: any;
  variant?: 'normal' | 'outline';
}
const VariationGroups: React.FC<Props> = ({ variations, variant }) => {
  const { attributes, setAttributes } = useAttributes();
  const [gallery, setGallery] = useAtom(thumb_images);
  // debugger
  const replaceHyphens = (str: string) => {
    return str.replace(/-/g, ' ');
  };
  // console.log('variation', variations);

  return (
    <>
      {Object.keys(variations).map((variationName, index) => (
        <div
          className="py-4 border-b border-border-200  border-opacity-70 first:pt-0 flex items-center last:pb-0 last:border-b-0"
          key={index}
        >
          <span className="text-sm font-semibold text-heading leading-none capitalize ltr:mr-5 rtl:ml-5 min-w-[60px] inline-block whitespace-nowrap">
            {replaceHyphens(variationName)}:
          </span>
          <Scrollbar className="w-full pb-4">
            <div className="w-full flex space-x-4 rtl:space-x-reverse -mb-1.5">
              {variations[variationName].map((attribute: any) => (
                <Attribute
                  // className={variationName}
                  type={variationName}
                  color={attribute.meta ? attribute.meta : attribute?.value}
                  isActive={attributes[variationName] === attribute?.value}
                  value={attribute?.value}
                  key={attribute?.id}
                  variant={variant}
                  onClick={() => {
                    setAttributes((prev: any) => ({
                      ...prev,
                      [variationName]: attribute?.value,
                    }))
                    let selectedImage = attribute?.attribute?.values[0]?.images[0];
                    let selectedAllImage = attribute?.attribute?.values[0]?.images ?? [];

                    // Check if gallery already contains images with the same attributeId
                    if (gallery.some(obj => obj?.attribute_value === attribute?.value)) {
                      return;
                    }

                    // remove variation image of same code in case of seleted attribute has no value
                    if (!selectedAllImage.length) {
                      let arrayOfObjects = gallery.filter(obj => obj?.attribute_code !== attribute?.attribute?.attribute_code);
                      setGallery([...selectedAllImage, ...arrayOfObjects])
                      return;
                    }

                    // Step 1: Iterate through the array and remove objects with the same attributeId
                    let arrayOfObjects = gallery
                      .filter(obj => obj?.attributeId !== selectedImage?.attributeId)
                      .filter(obj => obj?.id !== selectedImage?.id);
                    setGallery([...selectedAllImage, ...arrayOfObjects])
                  }
                  }
                />
              ))}
            </div>
          </Scrollbar>
        </div>
      ))}
    </>
  );
};

export default VariationGroups;
