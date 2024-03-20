import { STATIC_CONTENT } from '@/lib/constants/static-content';
import { PlusIcon } from '@/components/icons/plus-icon';
import Card from '@/components/ui/cards/card';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';
import PhoneInput from '@/components/ui/forms/phone-input';
import { User } from '@/types';

interface Props {
  userId: string;
  profileId: string;
  contact: string;
  user:User
}

const ProfileContact = ({ userId, profileId, contact ,user }: Props) => {
  const { openModal } = useModalAction();
  
  function onAdd() {
    openModal('ADD_OR_UPDATE_PROFILE_CONTACT', {
      customerId: userId,
      profileId,
      contact,
      user
    });
  }
  return (
    <Card className="flex flex-col w-full">
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <p className="text-lg capitalize text-heading lg:text-xl">
          {STATIC_CONTENT['text-user-name']}
        </p>

        {/* {onAdd && (
          <button
            className="flex items-center text-sm font-semibold transition-colors duration-200 text-accent hover:text-accent-hover focus:text-accent-hover focus:outline-none"
            onClick={onAdd}
          >
            <PlusIcon className="h-4 w-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5" />
            {Boolean(contact) ? STATIC_CONTENT['text-update'] : STATIC_CONTENT['text-add']}
          </button>
        )} */}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <PhoneInput
          country="in"
          value={contact}
          disabled={true}
          inputClass="!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !rounded focus:!border-accent !h-12"
          dropdownClass="focus:!ring-0 !border !border-border-base !shadow-350"
        />
      </div>
    </Card>
  );
};

export default ProfileContact;
